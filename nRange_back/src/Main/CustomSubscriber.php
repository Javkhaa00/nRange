<?php 
namespace App\Main;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\Event\ControllerArgumentsEvent;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;

class CustomSubscriber implements EventSubscriberInterface
{
    private $em;
    private $reader;
    public function __construct(EntityManagerInterface $em){
        $this->reader = new AnnotationReader();
        $this->em = $em;
    }
    public function onKernelController(ControllerEvent $event){
        $controller = $event->getController();
        $request = $event->getRequest();
        if (!is_array($controller)) {
            return;
        }
        list($controllerObject, $methodName) = $controller;
        $controllerReflectionObject = new \ReflectionObject($controllerObject);
        $reflectionMethod = $controllerReflectionObject->getMethod($methodName);
        $a_repos = $this->reader->getMethodAnnotation($reflectionMethod, "\\App\\Main\\Annotations\\Functions");
        if($a_repos){
            $e_obj = new \stdClass();
            $arra = $a_repos->getM();
            foreach ($arra as $key => $value) {
                $name_class = "App\\Functions\\".$value;
                $e_obj->{$value} = new $name_class($this->em);
            }
            // set Repositories
            $controllerObject->setE($e_obj);
        }
        // set in Request
        $controllerObject->setEm($this->em);
    }
    public static function getSubscribedEvents(){
        return array(
            KernelEvents::CONTROLLER => 'onKernelController'
        );
    }
}