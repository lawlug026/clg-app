-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 21, 2017 at 06:51 PM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cbpgec`
--

-- --------------------------------------------------------

--
-- Table structure for table `ass1`
--

CREATE TABLE IF NOT EXISTS `ass1` (
  `ques` varchar(255) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ass2`
--

CREATE TABLE IF NOT EXISTS `ass2` (
  `ques` varchar(255) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ass3`
--

CREATE TABLE IF NOT EXISTS `ass3` (
  `ques` varchar(255) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ass4`
--

CREATE TABLE IF NOT EXISTS `ass4` (
  `ques` varchar(255) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass4`
--

INSERT INTO `ass4` (`ques`, `op1`, `op2`) VALUES
('ufgd', 'dsvsd', 'dcdszc'),
('ufgd', 'dsvsd', 'dcdszc');

-- --------------------------------------------------------

--
-- Table structure for table `ass5`
--

CREATE TABLE IF NOT EXISTS `ass5` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass5`
--

INSERT INTO `ass5` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass6`
--

CREATE TABLE IF NOT EXISTS `ass6` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass6`
--

INSERT INTO `ass6` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass7`
--

CREATE TABLE IF NOT EXISTS `ass7` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass7`
--

INSERT INTO `ass7` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass8`
--

CREATE TABLE IF NOT EXISTS `ass8` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass8`
--

INSERT INTO `ass8` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE IF NOT EXISTS `assignment` (
  `assid` varchar(20) NOT NULL,
  `heading` varchar(20) NOT NULL,
  `teacherId` varchar(15) NOT NULL,
  `semester` int(5) NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `department` varchar(10) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `dateOfTest` date NOT NULL,
  PRIMARY KEY (`assid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assid`, `heading`, `teacherId`, `semester`, `startTime`, `endTime`, `department`, `subject`, `date`, `dateOfTest`) VALUES
('1', 'dcudu', '4', 4, '00:00:00', '00:00:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('2', 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('3', 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('4', 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('5', 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('6', 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('7', 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17'),
('8', 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17');

-- --------------------------------------------------------

--
-- Table structure for table `assNaN`
--

CREATE TABLE IF NOT EXISTS `assNaN` (
  `ques` varchar(255) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assSol8`
--

CREATE TABLE IF NOT EXISTS `assSol8` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bearer`
--

CREATE TABLE IF NOT EXISTS `bearer` (
  `bear` varchar(30) NOT NULL,
  `roll` varchar(20) NOT NULL,
  PRIMARY KEY (`bear`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bearer`
--

INSERT INTO `bearer` (`bear`, `roll`) VALUES
('1', '3'),
('2', '3'),
('3', '3'),
('4', '3'),
('5', '02420703114');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE IF NOT EXISTS `form` (
  `roll` varchar(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `semester` int(10) DEFAULT NULL,
  `fatherName` varchar(50) DEFAULT NULL,
  `motherName` varchar(50) DEFAULT NULL,
  `studentMobile` varchar(15) DEFAULT NULL,
  `fatherMobile` varchar(15) DEFAULT NULL,
  `fatherOccupation` varchar(100) DEFAULT NULL,
  `motherOccupation` varchar(100) DEFAULT NULL,
  `fatherOfficeAddress` varchar(100) DEFAULT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `trainingDet` varchar(100) DEFAULT NULL,
  `acheivementDet` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`roll`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`roll`, `name`, `email`, `semester`, `fatherName`, `motherName`, `studentMobile`, `fatherMobile`, `fatherOccupation`, `motherOccupation`, `fatherOfficeAddress`, `address1`, `address2`, `dob`, `trainingDet`, `acheivementDet`) VALUES
('02420703114', 'Abhay Sehgal', 'abhay.sehgal20@gmail.com', 7, 'P L sehgal', 'Rekha Sehgal', '8447290538', '9818449107', 'private job', 'homeMaker', 'sfds', 'vbgd', 'dvdsf', '20-12-1995', 'gryg', 'sdvyerv');

-- --------------------------------------------------------

--
-- Table structure for table `logindata`
--

CREATE TABLE IF NOT EXISTS `logindata` (
  `roll` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(120) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `semester` int(5) NOT NULL,
  PRIMARY KEY (`roll`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logindata`
--

INSERT INTO `logindata` (`roll`, `password`, `name`, `email`, `semester`) VALUES
('02420703114', 'abhay', 'Abhay Sehgal', 'abhay.sehgal20@gmail.com', 7),
('02620703114', 'ujjwal', 'Ujjwal Goyal', 'ujjwalafi@gmail.com', 7),
('1', 'kgsir', 'KGS', 'kg@gmail.com', 0),
('admin', 'admin', 'Admin', 'admin@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE IF NOT EXISTS `notice` (
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

CREATE TABLE IF NOT EXISTS `subject` (
  `subId` varchar(50) NOT NULL,
  `subName` varchar(100) NOT NULL,
  `maxCredit` int(20) NOT NULL,
  PRIMARY KEY (`subId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE IF NOT EXISTS `teacher` (
  `teacherId` varchar(50) NOT NULL,
  `teacherName` varchar(100) NOT NULL,
  `phoneNumber` int(10) NOT NULL,
  PRIMARY KEY (`teacherId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE IF NOT EXISTS `teaches` (
  `teacherId` varchar(50) NOT NULL,
  `subId` int(100) NOT NULL,
  PRIMARY KEY (`subId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
