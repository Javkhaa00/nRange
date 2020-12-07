<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GolfCourse
 *
 * @ORM\Table(name="golf_course")
 * @ORM\Entity
 */
class GolfCourse
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
     * @ORM\Column(name="coursename", type="string", length=255, nullable=false)
     */
    private $coursename;

    /**
     * @var string
     *
     * @ORM\Column(name="boundarycoordinates", type="string", length=255, nullable=false)
     */
    private $boundarycoordinates;

    /**
     * @var string
     *
     * @ORM\Column(name="activated", type="string", length=3, nullable=false, options={"default"="No","fixed"=true})
     */
    private $activated = 'No';

    /**
     * @var string
     *
     * @ORM\Column(name="scorecard", type="string", length=4, nullable=false, options={"default"="No"})
     */
    private $scorecard = 'No';

    /**
     * @var int
     *
     * @ORM\Column(name="hole", type="integer", nullable=false)
     */
    private $hole = '0';

    /**
     * @var string
     *
     * @ORM\Column(name="sponsorship", type="string", length=4, nullable=false, options={"default"="No"})
     */
    private $sponsorship = 'No';

    /**
     * @var int
     *
     * @ORM\Column(name="req_user", type="integer", nullable=false)
     */
    private $reqUser = '0';

    /**
     * @var int
     *
     * @ORM\Column(name="user_played", type="integer", nullable=false)
     */
    private $userPlayed = '0';

    /**
     * @var int
     *
     * @ORM\Column(name="round_played", type="integer", nullable=false)
     */
    private $roundPlayed = '0';

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
