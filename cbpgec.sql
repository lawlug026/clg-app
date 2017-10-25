-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2017 at 07:03 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

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
-- Table structure for table `ass19`
--

CREATE TABLE `ass19` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass19`
--

INSERT INTO `ass19` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass20`
--

CREATE TABLE `ass20` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass20`
--

INSERT INTO `ass20` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass21`
--

CREATE TABLE `ass21` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass21`
--

INSERT INTO `ass21` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `ass22`
--

CREATE TABLE `ass22` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass22`
--

INSERT INTO `ass22` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `ass24`
--

CREATE TABLE `ass24` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass24`
--

INSERT INTO `ass24` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

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
  `instructions` varchar(2500) NOT NULL,
  `status` varchar(20) NOT NULL,
  `colorCode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assid`, `heading`, `teacherId`, `semester`, `startTime`, `endTime`, `department`, `subject`, `date`, `dateOfTest`, `instructions`, `status`, `colorCode`) VALUES
(1, 'dcudu', '4', 4, '00:00:00', '00:00:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(2, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(3, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(4, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(5, 'dcudu', '4', 4, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(6, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(7, 'dcudu', '4', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-10-17', '', '', ''),
(20, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-11-17', 'jhbsssssfvjhbh', 'New', '#00AA44'),
(21, 'dcudu', '1', 5, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-12-17', 'jhbsssssfvjhbh', 'New', '#00AA44'),
(22, 'dcudu', '1', 8, '11:30:00', '11:55:00', 'it', 'scx', '2012-10-17', '2012-12-17', 'jhbsssssfvjhbh', 'New', '#00AA44'),
(23, 'dcudu', '1', 8, '11:30:00', '11:55:00', 'it', 'scx', '2017-10-17', '2017-12-17', 'jhbsssssfvjhbh', 'New', '#00AA44'),
(24, 'dcudu', '1', 8, '11:30:00', '11:55:00', 'it', 'scx', '2017-10-17', '2017-12-17', 'jhbsssssfvjhbh', 'New', '#00AA44');

-- --------------------------------------------------------

--
-- Table structure for table `assres19`
--

CREATE TABLE `assres19` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assres20`
--

CREATE TABLE `assres20` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assres21`
--

CREATE TABLE `assres21` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assres22`
--

CREATE TABLE `assres22` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assres23`
--

CREATE TABLE `assres23` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `assres24`
--

CREATE TABLE `assres24` (
  `studentId` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol19`
--

CREATE TABLE `asssol19` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol20`
--

CREATE TABLE `asssol20` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol21`
--

CREATE TABLE `asssol21` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol22`
--

CREATE TABLE `asssol22` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol23`
--

CREATE TABLE `asssol23` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `asssol24`
--

CREATE TABLE `asssol24` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `heading` varchar(100) DEFAULT NULL,
  `message` varchar(200) DEFAULT NULL,
  `id` int(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `Enrollment_No` varchar(20) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Semester` int(10) DEFAULT NULL,
  `Father_Name` varchar(50) DEFAULT NULL,
  `Mother_Name` varchar(50) DEFAULT NULL,
  `Student_Mobile` varchar(15) DEFAULT NULL,
  `Father_Mobile` varchar(15) DEFAULT NULL,
  `Father_Occupation` varchar(100) DEFAULT NULL,
  `Mother_Occupation` varchar(100) DEFAULT NULL,
  `Father_Office_Address` varchar(100) DEFAULT NULL,
  `Permanent_Address` varchar(100) DEFAULT NULL,
  `Correspondence_Address` varchar(100) DEFAULT NULL,
  `Date_Of_Birth` varchar(10) DEFAULT NULL,
  `Training_Details` varchar(100) DEFAULT NULL,
  `Achievement_Details` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`Enrollment_No`, `Name`, `Email`, `Semester`, `Father_Name`, `Mother_Name`, `Student_Mobile`, `Father_Mobile`, `Father_Occupation`, `Mother_Occupation`, `Father_Office_Address`, `Permanent_Address`, `Correspondence_Address`, `Date_Of_Birth`, `Training_Details`, `Achievement_Details`) VALUES
('02620703114', 'Ujjwal Goyal', 'ujwalgoyal.2@gmail.com', 7, 'S.K. Goyal', 'Usha Goyal', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
('02712703114', 'Mohit Goyal', 'mohit.2@gmail.com', 7, 'S.K. Goyal', 'Usha Goyal', '9560986608', '9810191702', 'private job', NULL, 'jhkjzxbg', 'asidghg', 'dvdfhsdfhdsf', '05/08/1996', NULL, 'nothing'),
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
  `Enrollment No` varchar(20) NOT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Name` varchar(120) DEFAULT NULL,
  `Email` varchar(70) NOT NULL,
  `Semester` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logindata`
--

INSERT INTO `logindata` (`Enrollment No`, `Password`, `Name`, `Email`, `Semester`) VALUES
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
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `logindata`
--
ALTER TABLE `logindata`
  ADD PRIMARY KEY (`Enrollment No`);

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

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
