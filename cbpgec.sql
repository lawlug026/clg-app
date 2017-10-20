-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 20, 2017 at 08:36 PM
-- Server version: 5.7.19-0ubuntu0.17.04.1
-- PHP Version: 7.0.22-0ubuntu0.17.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cbpgec`
--

-- --------------------------------------------------------

--
-- Table structure for table `ass123`
--

CREATE TABLE `ass123` (
  `ques` varchar(50) NOT NULL,
  `op1` varchar(20) NOT NULL,
  `op2` varchar(20) NOT NULL,
  `op3` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass123`
--

INSERT INTO `ass123` (`ques`, `op1`, `op2`, `op3`) VALUES
('jhasdbfjhsbfhb', 'jkghjhg', 'jkghkjhgkj', 'gjghkjghkjgh');

-- --------------------------------------------------------

--
-- Table structure for table `ass1234`
--

CREATE TABLE `ass1234` (
  `ques` varchar(50) NOT NULL,
  `op1` varchar(20) NOT NULL,
  `op2` varchar(20) NOT NULL,
  `op3` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass1234`
--

INSERT INTO `ass1234` (`ques`, `op1`, `op2`, `op3`) VALUES
('zsjkdbjkgb', 'jknsdklfj nq', 'h;', 'JAIJSDF ');

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assid` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `heading` varchar(20) NOT NULL,
  `ans` varchar(20) NOT NULL,
  `dateOfTest` varchar(10) NOT NULL,
  `startTime` varchar(10) NOT NULL,
  `endTime` varchar(10) NOT NULL,
  `semester` int(2) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `dept` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assid`, `date`, `heading`, `ans`, `dateOfTest`, `startTime`, `endTime`, `semester`, `subject`, `dept`) VALUES
('ass123', '15-01-2017', 'heading', 'ans', '12-05-2015', '12:00', '3:00', 5, 'Computer', 'IT'),
('ass1234', '12-25-2016', 'sdfhs', 'dsfhj', '12-05-2016', '30:00', '52:00', 5, 'sjkdfhvb', 'hsvb');

-- --------------------------------------------------------

--
-- Table structure for table `bearer`
--

CREATE TABLE `bearer` (
  `bear` int(30) NOT NULL,
  `roll` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `roll` int(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `semester` int(10) DEFAULT NULL,
  `fatherName` varchar(50) DEFAULT NULL,
  `motherName` varchar(50) DEFAULT NULL,
  `studentMobile` int(15) DEFAULT NULL,
  `fatherMobile` int(15) DEFAULT NULL,
  `fatherOccupation` varchar(100) DEFAULT NULL,
  `motherOccupation` varchar(100) DEFAULT NULL,
  `fatherOfficeAddress` varchar(100) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `trainingDet` varchar(100) DEFAULT NULL,
  `acheivementDet` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`roll`, `name`, `email`, `semester`, `fatherName`, `motherName`, `studentMobile`, `fatherMobile`, `fatherOccupation`, `motherOccupation`, `fatherOfficeAddress`, `address1`, `address2`, `dob`, `trainingDet`, `acheivementDet`) VALUES
(1, 'ujjwal', 'test@test.com', 5, 'test', 'etst', 123456798, 23164879, 'oubhb', 'jhkjibu', 'hjjhvj', 'hjvhjhv', 'bvnb', '12-05-2015', '123545', '5432168');

-- --------------------------------------------------------

--
-- Table structure for table `logindata`
--

CREATE TABLE `logindata` (
  `roll` int(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logindata`
--

INSERT INTO `logindata` (`roll`, `password`, `name`) VALUES
(1, 'ujjwal', '12'),
(2, 'pankaj', NULL),
(3, 'abhay', '12'),
(78945, 'jknitsbjb', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `noticeId` varchar(50) NOT NULL,
  `DON` date NOT NULL,
  `heading` varchar(100) NOT NULL,
  `content` varchar(500) NOT NULL,
  `file` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `subId` varchar(50) NOT NULL,
  `subName` varchar(100) NOT NULL,
  `maxCredit` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacherId` varchar(50) NOT NULL,
  `teacherName` varchar(100) NOT NULL,
  `phoneNumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE `teaches` (
  `teacherId` varchar(50) NOT NULL,
  `subId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`assid`);

--
-- Indexes for table `bearer`
--
ALTER TABLE `bearer`
  ADD PRIMARY KEY (`bear`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`roll`);

--
-- Indexes for table `logindata`
--
ALTER TABLE `logindata`
  ADD PRIMARY KEY (`roll`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subId`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`teacherId`);

--
-- Indexes for table `teaches`
--
ALTER TABLE `teaches`
  ADD PRIMARY KEY (`subId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
