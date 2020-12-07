<?php

namespace App\Controller;

use App\Main\Annotations\Functions;
use App\Main\MainController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends MainController
{

    /**
     * @Route("/state/{st}", name="states")
     * @Functions({"CourseOptions"})
     */
    public function listedByState(Request $request, $st)
    {
        // print_r($request->getContent());exit;
        $parameters = json_decode($request->getContent(), true);
        $states     = $this->e->CourseOptions->getCourseByCity($st, $parameters["city"]);

        $presentation = json_encode($states, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

        $response = new Response($presentation);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/cities/{st}", name="cities")
     * @Functions({"CourseOptions"})
     */
    public function citiesByState($st)
    {
        $cities = $this->e->CourseOptions->getCitiesByState($st);

        $presentation = json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

        $response = new Response($presentation);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("/search", name="search_action")
     * @Functions({"CourseOptions"})
     */
    public function searchAction(Request $request)
    {
        $search = $request->query->get('keyword');
        $cities = $this->e->CourseOptions->search($search);

        $presentation = json_encode($cities, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

        $response = new Response($presentation);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

}
