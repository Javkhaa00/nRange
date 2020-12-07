<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * NrOptions
 *
 * @ORM\Table(name="nr_options", indexes={@ORM\Index(name="no_code", columns={"no_code"})})
 * @ORM\Entity
 */
class NrOptions
{
    /**
     * @var int
     *
     * @ORM\Column(name="no_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $noId;

    /**
     * @var int
     *
     * @ORM\Column(name="no_code", type="integer", nullable=false)
     */
    private $noCode;

    /**
     * @var string
     *
     * @ORM\Column(name="Designer", type="string", length=50, nullable=false)
     */
    private $designer;

    /**
     * @var string
     *
     * @ORM\Column(name="GreensGrassType", type="string", length=30, nullable=false)
     */
    private $greensgrasstype;

    /**
     * @var string
     *
     * @ORM\Column(name="FairwaysGrassType", type="string", length=30, nullable=false)
     */
    private $fairwaysgrasstype;

    /**
     * @var string
     *
     * @ORM\Column(name="WaterHazards", type="string", length=4, nullable=false)
     */
    private $waterhazards;

    /**
     * @var string
     *
     * @ORM\Column(name="SandBunkers", type="string", length=10, nullable=false)
     */
    private $sandbunkers;

    /**
     * @var string
     *
     * @ORM\Column(name="YardageMarkers", type="string", length=120, nullable=false)
     */
    private $yardagemarkers;

    /**
     * @var string
     *
     * @ORM\Column(name="AcceptTeeTimes", type="string", length=4, nullable=false)
     */
    private $acceptteetimes;

    /**
     * @var string
     *
     * @ORM\Column(name="EarliestTeeTime", type="string", length=10, nullable=false)
     */
    private $earliestteetime;

    /**
     * @var string
     *
     * @ORM\Column(name="DrivingRange", type="string", length=10, nullable=false)
     */
    private $drivingrange;

    /**
     * @var string
     *
     * @ORM\Column(name="TrainingFacilities", type="string", length=120, nullable=false)
     */
    private $trainingfacilities;

    /**
     * @var string
     *
     * @ORM\Column(name="OnSiteGolfPro", type="string", length=50, nullable=false)
     */
    private $onsitegolfpro;

    /**
     * @var string
     *
     * @ORM\Column(name="General_Manager", type="string", length=50, nullable=false)
     */
    private $generalManager;

    /**
     * @var string
     *
     * @ORM\Column(name="Superintendent", type="string", length=50, nullable=false)
     */
    private $superintendent;

    /**
     * @var string
     *
     * @ORM\Column(name="DressCode", type="string", length=20, nullable=false)
     */
    private $dresscode;

    /**
     * @var string
     *
     * @ORM\Column(name="Spikes", type="string", length=4, nullable=false)
     */
    private $spikes;

    /**
     * @var string
     *
     * @ORM\Column(name="Guests", type="string", length=30, nullable=false)
     */
    private $guests;

    /**
     * @var string
     *
     * @ORM\Column(name="Access", type="string", length=10, nullable=false)
     */
    private $access;

    /**
     * @var string
     *
     * @ORM\Column(name="Discounts", type="string", length=10, nullable=false)
     */
    private $discounts;

    /**
     * @var string
     *
     * @ORM\Column(name="RentalClubs", type="string", length=4, nullable=false)
     */
    private $rentalclubs;

    /**
     * @var string
     *
     * @ORM\Column(name="Carts", type="string", length=50, nullable=false)
     */
    private $carts;

    /**
     * @var string
     *
     * @ORM\Column(name="CartFees", type="string", length=50, nullable=false)
     */
    private $cartfees;

    /**
     * @var string
     *
     * @ORM\Column(name="Pullcarts", type="string", length=10, nullable=false)
     */
    private $pullcarts;

    /**
     * @var string
     *
     * @ORM\Column(name="Caddies", type="string", length=30, nullable=false)
     */
    private $caddies;

    /**
     * @var string
     *
     * @ORM\Column(name="Walking", type="string", length=30, nullable=false)
     */
    private $walking;

    /**
     * @var string
     *
     * @ORM\Column(name="Restaurant", type="string", length=120, nullable=false)
     */
    private $restaurant;

    /**
     * @var string
     *
     * @ORM\Column(name="Bar", type="string", length=50, nullable=false)
     */
    private $bar;

    /**
     * @var string
     *
     * @ORM\Column(name="Hours", type="string", length=50, nullable=false)
     */
    private $hours;

    /**
     * @var string
     *
     * @ORM\Column(name="AvailableProduct", type="string", length=50, nullable=false)
     */
    private $availableproduct;

    /**
     * @var string
     *
     * @ORM\Column(name="County", type="string", length=20, nullable=false)
     */
    private $county;

    /**
     * @var string
     *
     * @ORM\Column(name="HomesOnCourse", type="string", length=4, nullable=false)
     */
    private $homesoncourse;

    /**
     * @var string
     *
     * @ORM\Column(name="GolfCommunity", type="string", length=4, nullable=false)
     */
    private $golfcommunity;

    /**
     * @var string
     *
     * @ORM\Column(name="Course_Slope", type="string", length=20, nullable=false)
     */
    private $courseSlope;

    /**
     * @var string
     *
     * @ORM\Column(name="Course_Rating", type="string", length=20, nullable=false)
     */
    private $courseRating;

    /**
     * @var string
     *
     * @ORM\Column(name="Course_Yardage", type="string", length=20, nullable=false)
     */
    private $courseYardage;

    /**
     * @var string
     *
     * @ORM\Column(name="Course_Par", type="string", length=20, nullable=false)
     */
    private $coursePar;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee1_Name", type="string", length=20, nullable=false)
     */
    private $tee1Name;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee1_Slope", type="string", length=20, nullable=false)
     */
    private $tee1Slope;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee1_Rating", type="string", length=20, nullable=false)
     */
    private $tee1Rating;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee1_Yardage", type="string", length=20, nullable=false)
     */
    private $tee1Yardage;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee1_Par", type="string", length=20, nullable=false)
     */
    private $tee1Par;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee2_Name", type="string", length=20, nullable=false)
     */
    private $tee2Name;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee2_Slope", type="string", length=20, nullable=false)
     */
    private $tee2Slope;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee2_Rating", type="string", length=20, nullable=false)
     */
    private $tee2Rating;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee2_Yardage", type="string", length=20, nullable=false)
     */
    private $tee2Yardage;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee2_Par", type="string", length=20, nullable=false)
     */
    private $tee2Par;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee3_Name", type="string", length=20, nullable=false)
     */
    private $tee3Name;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee3_Slope", type="string", length=20, nullable=false)
     */
    private $tee3Slope;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee3_Rating", type="string", length=20, nullable=false)
     */
    private $tee3Rating;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee3_Yardage", type="string", length=20, nullable=false)
     */
    private $tee3Yardage;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee3_Par", type="string", length=20, nullable=false)
     */
    private $tee3Par;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee4_Name", type="string", length=20, nullable=false)
     */
    private $tee4Name;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee4_Slope", type="string", length=20, nullable=false)
     */
    private $tee4Slope;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee4_Rating", type="string", length=20, nullable=false)
     */
    private $tee4Rating;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee4_Yardage", type="string", length=20, nullable=false)
     */
    private $tee4Yardage;

    /**
     * @var string
     *
     * @ORM\Column(name="Tee4_Par", type="string", length=20, nullable=false)
     */
    private $tee4Par;

    /**
     * @var string
     *
     * @ORM\Column(name="Fee_Weekend", type="string", length=20, nullable=false)
     */
    private $feeWeekend;

    /**
     * @var string
     *
     * @ORM\Column(name="Fee_Weekday", type="string", length=20, nullable=false)
     */
    private $feeWeekday;

    /**
     * @var string
     *
     * @ORM\Column(name="Fee_Twilight", type="string", length=20, nullable=false)
     */
    private $feeTwilight;

    /**
     * @var string
     *
     * @ORM\Column(name="Description", type="text", length=65535, nullable=false)
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="no_date", type="date", nullable=false, options={"default"="2000-01-01"})
     */
    private $noDate = '2000-01-01';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="no_time", type="time", nullable=true)
     */
    private $noTime;


}
