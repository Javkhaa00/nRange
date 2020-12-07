<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CourseOptions
 *
 * @ORM\Table(name="course_options", indexes={@ORM\Index(name="Club_Name", columns={"Club_Name", "CourseName"}), @ORM\Index(name="code", columns={"code"})})
 * @ORM\Entity
 */
class CourseOptions
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="code", type="integer", nullable=false)
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="Club_Name", type="string", length=150, nullable=false)
     */
    private $clubName;

    /**
     * @var string
     *
     * @ORM\Column(name="CourseName", type="string", length=150, nullable=false)
     */
    private $coursename;

    /**
     * @var string
     *
     * @ORM\Column(name="Street", type="string", length=150, nullable=false)
     */
    private $street;

    /**
     * @var string
     *
     * @ORM\Column(name="City", type="string", length=50, nullable=false)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(name="ST", type="string", length=20, nullable=false)
     */
    private $st;

    /**
     * @var string
     *
     * @ORM\Column(name="Zip", type="string", length=20, nullable=false)
     */
    private $zip;

    /**
     * @var string
     *
     * @ORM\Column(name="Phone", type="string", length=20, nullable=false)
     */
    private $phone;

    /**
     * @var string
     *
     * @ORM\Column(name="Fax", type="string", length=20, nullable=false)
     */
    private $fax;

    /**
     * @var string
     *
     * @ORM\Column(name="Email", type="string", length=124, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="Course_URL", type="string", length=50, nullable=false)
     */
    private $courseUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="TYPE", type="string", length=10, nullable=false)
     */
    private $type;

    /**
     * @var string
     *
     * @ORM\Column(name="Year_Built", type="string", length=5, nullable=false)
     */
    private $yearBuilt;

    /**
     * @var string
     *
     * @ORM\Column(name="Map_URL", type="string", length=60, nullable=false)
     */
    private $mapUrl;

    /**
     * @var string
     *
     * @ORM\Column(name="Latitude", type="string", length=100, nullable=false)
     */
    private $latitude;

    /**
     * @var string
     *
     * @ORM\Column(name="Longitude", type="string", length=100, nullable=false)
     */
    private $longitude;

    /**
     * @var string
     *
     * @ORM\Column(name="uuni_code", type="string", length=50, nullable=false)
     */
    private $uuniCode;

    /**
     * @var int
     *
     * @ORM\Column(name="map_email", type="integer", nullable=false)
     */
    private $mapEmail;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date", nullable=false, options={"default"="1999-01-01"})
     */
    private $date = '1999-01-01';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="time", type="time", nullable=true)
     */
    private $time;


}
