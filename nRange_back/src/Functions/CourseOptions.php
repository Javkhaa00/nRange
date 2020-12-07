<?php

namespace App\Functions;

use App\Functions\MainEntity;

class CourseOptions extends MainEntity
{

    public function getCourseByCity($st, $ct, $search = "")
    {
        return $this->em->createQueryBuilder()
            ->select('t.id, t.st, t.clubName, t.city, t.coursename, t.street, t.zip, t.phone, t.fax, t.email, t.courseUrl, t.type, t.yearBuilt, t.mapUrl')
            ->addSelect('n.designer, n.onsitegolfpro, n.generalManager, n.superintendent, n.guests, n.access, n.rentalclubs, n.carts, n.cartfees, n.pullcarts, n.caddies, n.restaurant')
            ->addSelect('n.courseSlope,  n.dresscode, n.spikes, n.description, n.noDate')
            ->from("App:CourseOptions", "t")
            ->innerJoin("App:NrOptions", "n", "WITH", "n.noCode = t.code")
            ->where("t.st = :st", "t.city = :ct")
            ->setParameters(["st" => $st, "ct" => $ct])
            ->orderBy("t.clubName", "ASC")
            ->getQuery()->getResult()
        ;
    }

    public function getCitiesByState($st)
    {
        return $this->em->createQueryBuilder()
            ->select('t.city')
            ->from("App:CourseOptions", "t")
            ->where("t.st = :st")
            ->distinct()
            ->setParameter("st", $st)
            ->getQuery()->getResult()
        ;
    }

    public function search($search)
    {
        $search = trim(strtolower($search));
        return $this->em->createQueryBuilder()
            ->select('t.id, t.st, t.clubName, t.city, t.coursename, t.street')
            ->from("App:CourseOptions", "t")
            ->where("LOWER(t.st) LIKE :search OR LOWER(t.clubName) LIKE :search OR LOWER(t.city) LIKE :search OR LOWER(t.coursename) LIKE :search")
            ->setParameter("search", "%" . $search . "%")
            ->orderBy("t.clubName", "ASC")
            ->getQuery()->getResult()
        ;
    }

}
