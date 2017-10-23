-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 23, 2017 at 01:11 PM
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
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assid` int(20) NOT NULL,
  `heading` varchar(20) NOT NULL,
  `teacherId` varchar(15) NOT NULL,
  `semester` int(5) NOT NULL,
  `startTime` time NOT NULL,
  `endTime` time NOT NULL,
  `department` varchar(10) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `date` date NOT NULL,
  `dateOfTest` date NOT NULL,
  `instructions` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assid`, `heading`, `teacherId`, `semester`, `startTime`, `endTime`, `department`, `subject`, `date`, `dateOfTest`, `instructions`) VALUES
(1, 'dcudu', '4', 4, '00:00:00', '00:00:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(2, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(3, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(4, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(5, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(6, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(7, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(8, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(9, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(10, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(11, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(12, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(13, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(14, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(15, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', ''),
(16, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', 'jhbsssssfvjhbh'),
(17, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', 'jhbsssssfvjhbh'),
(18, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', 'jhbsssssfvjhbh');

-- --------------------------------------------------------

--
-- Table structure for table `bearer`
--

CREATE TABLE `bearer` (
  `bear` int(30) NOT NULL,
  `roll` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bearer`
--

INSERT INTO `bearer` (`bear`, `roll`) VALUES
(1, '3'),
(2, '3'),
(3, '3'),
(4, '3'),
(5, '02420703114'),
(6, '1'),
(7, '1');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
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
  `acheivementDet` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`roll`, `name`, `email`, `semester`, `fatherName`, `motherName`, `studentMobile`, `fatherMobile`, `fatherOccupation`, `motherOccupation`, `fatherOfficeAddress`, `address1`, `address2`, `dob`, `trainingDet`, `acheivementDet`) VALUES
('02620703114', 'Ujjwal Goyal', 'ujwalgoyal.2@gmail.com', 7, 'S.K. Goyal', 'Usha Goyal', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02720703114', 'Mohit Goyal', 'mohit.2@gmail.com', 7, 'S.K. Goyal', 'Usha Goyal', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02920703114', 'Rohit Goyal', 'rohit.2@gmail.com', 7, 'S.K. Goyal', 'Usha Goyal', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02920703115', 'monish Yadav', 'yadav.2@gmail.com', 5, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02920703116', 'Lalu Yadav', 'lalu.2@gmail.com', 3, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02920703117', 'juyal Goyal', 'juyal.2@gmail.com', 1, 'ABC.K. Goyal', 'XYZ', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02920703118', 'Bharat Jain', 'jain.2@gmail.com', 2, 'ABC.K. Jain', 'PQR', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('04520703116', 'Omni Yadav', 'omni.2@gmail.com', 3, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('04522703116', 'Omnsdi Yadav', 'omnsdfi.2@gmail.com', 3, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('04522703117', 'Om Yadav', 'mo.2@gmail.com', 2, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('08522703116', 'Osdffm Yadav', 'asgmo.2@gmail.com', 4, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('09522703116', 'rtyy Yadav', 'sdfg.2@gmail.com', 4, 'ABC. lalu', 'ghj', '9560986608', '123456879', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing');

-- --------------------------------------------------------

--
-- Table structure for table `logindata`
--

CREATE TABLE `logindata` (
  `roll` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `name` varchar(120) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `semester` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logindata`
--

INSERT INTO `logindata` (`roll`, `password`, `name`, `email`, `semester`) VALUES
('02620703114', 'ujjwal', 'Ujjwal Goyal', 'ujjwalafi@gmail.com', 7),
('02720703114', 'mohit', 'Mohit Goyal', 'mohit.2@gmail.com', 7),
('02920703114', 'rohit', 'Rohit Goyal', 'rohit.2@gmail.com', 7),
('02920703115', 'monish', 'monish Yadav', 'yadav.2@gmail.com', 5),
('02920703116', 'lalu', 'Lalu Yadav', 'lalu.2@gmail.com', 3),
('02920703117', 'juyal', 'juyal Goyal', 'juyal.2@gmail.com', 1),
('02920703118', 'bharat', 'Bharat Jain', 'jain.2@gmail.com', 2),
('04520703116', 'omni', 'Omni Yadav', 'omni.2@gmail.com', 3),
('04522703116', 'omnsdi', 'Omnsdi Yadav', 'omnsdfi.2@gmail.com', 3),
('04522703117', 'om', 'Om Yadav', 'mo.2@gmail.com', 2),
('08522703116', 'osdffm', 'Osdffm Yadav', 'asgmo.2@gmail.com', 4),
('09522703116', 'rtyy', 'rtyy Yadav', 'sdfg.2@gmail.com', 4);

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
  `maxCredit` int(20) NOT NULL,
  `semester` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`subId`, `subName`, `maxCredit`, `semester`) VALUES
('1', 'Compiler Design', 7, 5),
('2', 'Operating System', 7, 5),
('3', 'IT', 7, 5),
('4', 'System & Security', 7, 5),
('5', 'Computer Networks', 7, 5),
('6', 'Database', 6, 5);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacherId` varchar(50) NOT NULL,
  `teacherName` varchar(100) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacherId`, `teacherName`, `phoneNumber`) VALUES
('2', 'KG Sir', '9652321456');

-- --------------------------------------------------------

--
-- Table structure for table `teaches`
--

CREATE TABLE `teaches` (
  `teacherId` varchar(50) NOT NULL,
  `subId` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teaches`
--

INSERT INTO `teaches` (`teacherId`, `subId`) VALUES
('2', 3),
('2', 6);

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
