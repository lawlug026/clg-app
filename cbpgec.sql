-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 04, 2017 at 09:37 PM
-- Server version: 5.7.20-0ubuntu0.17.04.1
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
-- Table structure for table `ass1`
--

CREATE TABLE `ass1` (
  `ques` varchar(255) DEFAULT NULL,
  `answer` char(40) DEFAULT NULL,
  `op1` char(20) DEFAULT NULL,
  `op2` char(20) DEFAULT NULL,
  `op3` char(20) DEFAULT NULL,
  `op4` char(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ass1`
--

INSERT INTO `ass1` (`ques`, `answer`, `op1`, `op2`, `op3`, `op4`) VALUES
('ufgd', '', '', '', '', ''),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef'),
('ufgd', 'dfws', 'dsvsd', 'dcdszc', 'acudsf', 'adfsef');

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assid` int(5) NOT NULL,
  `heading` varchar(50) DEFAULT NULL,
  `teacherId` int(10) DEFAULT NULL,
  `semester` varchar(5) DEFAULT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `date` date DEFAULT NULL,
  `teacherName` varchar(50) DEFAULT NULL,
  `subject` varchar(40) DEFAULT NULL,
  `dateOfTest` date DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `instructions` varchar(2500) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `colorCode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assid`, `heading`, `teacherId`, `semester`, `startTime`, `endTime`, `date`, `teacherName`, `subject`, `dateOfTest`, `department`, `instructions`, `status`, `colorCode`) VALUES
(1, 'dcudu', 2, '8', '11:30:00', '11:55:00', '2017-10-17', 'KG Sir', 'compiler', '2017-11-04', 'it', 'jhbsssssfvjhbh', 'Expired', '#ff0000');

-- --------------------------------------------------------

--
-- Table structure for table `assRes1`
--

CREATE TABLE `assRes1` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL,
  `total` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assRes1`
--

INSERT INTO `assRes1` (`studentId`, `ques1`, `ques2`, `ques3`, `total`) VALUES
('02420703114', '1', '1', '1', '3');

-- --------------------------------------------------------

--
-- Table structure for table `assSol1`
--

CREATE TABLE `assSol1` (
  `studentId` char(20) DEFAULT NULL,
  `ques1` varchar(255) DEFAULT NULL,
  `ques2` varchar(255) DEFAULT NULL,
  `ques3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assSol1`
--

INSERT INTO `assSol1` (`studentId`, `ques1`, `ques2`, `ques3`) VALUES
('02420703114', '', 'dfws', 'dfws');

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
(7, '1'),
(8, '30'),
(9, '02620703114'),
(10, '02620703114'),
(11, '02620703114'),
(12, '02620703114'),
(13, '00120703116');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `heading` varchar(100) DEFAULT NULL,
  `message` varchar(2500) DEFAULT NULL,
  `stid` int(20) DEFAULT NULL,
  `date` date NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`heading`, `message`, `stid`, `date`, `name`) VALUES
('Teacher Complaint', 'Not Punctual in taking the class', NULL, '2017-10-28', '');

-- --------------------------------------------------------

--
-- Table structure for table `form1`
--

CREATE TABLE `form1` (
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
  `Achievement_Details` varchar(100) DEFAULT NULL,
  `jklsdgjnb` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `form2`
--

CREATE TABLE `form2` (
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
  `Achievement_Details` varchar(100) DEFAULT NULL,
  `jklsdgjnb` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `form3`
--

CREATE TABLE `form3` (
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
  `Achievement_Details` varchar(100) DEFAULT NULL,
  `jklsdgjnb` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `form4`
--

CREATE TABLE `form4` (
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
  `Achievement_Details` varchar(100) DEFAULT NULL,
  `jklsdgjnb` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `Title` varchar(50) NOT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Year_1` int(11) DEFAULT NULL,
  `Year_2` int(11) DEFAULT NULL,
  `Year_3` int(11) DEFAULT NULL,
  `Year_4` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`Title`, `Start_Date`, `End_Date`, `Year_1`, `Year_2`, `Year_3`, `Year_4`) VALUES
('Placemensdhs', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placemensdhsdfhtjkullll2020', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placement12322', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placement2018', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placement2019', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placement2020', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1),
('Placementjkullll2020', '2012-05-16', '2012-09-16', 1, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `log1`
--

CREATE TABLE `log1` (
  `Name` varchar(27) DEFAULT NULL,
  `Enrollment_No` varchar(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Semester` varchar(3) DEFAULT NULL,
  `Password` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `log1`
--

INSERT INTO `log1` (`Name`, `Enrollment_No`, `Department`, `Semester`, `Password`) VALUES
('Mohit Goyal', '02712703114', NULL, '7', 'mohit');

-- --------------------------------------------------------

--
-- Table structure for table `log2`
--

CREATE TABLE `log2` (
  `Name` varchar(22) DEFAULT NULL,
  `Enrollment_No` varchar(11) NOT NULL,
  `Department` varchar(5) DEFAULT NULL,
  `Semester` varchar(3) DEFAULT NULL,
  `Password` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `log2`
--

INSERT INTO `log2` (`Name`, `Enrollment_No`, `Department`, `Semester`, `Password`) VALUES
('Abhishek Tanwar', '00120703116', 'IT', '3rd', 'abhishek'),
('Aditya Sharma', '00220703116', 'IT', '3rd', 'aditya'),
('Abhishek Munday', '00220703416', 'Civil', '3rd', 'abhishek'),
('Aditya Singh', '00320703116', 'IT', '3rd', 'aditya'),
('AMAN KUMAR', '00320703416', 'Civil', '3rd', 'aman'),
('Ahraar Alam', '00420703116', 'IT', '3rd', 'ahraar'),
('AMAR SHARMA', '00420703416', 'Civil', '3rd', 'amar'),
('Amandeep singh', '00520703116', 'IT', '3rd', 'amandeep'),
('Anuj Saini', '00520703416', 'Civil', '3rd', 'anuj'),
('Anupam Priyam', '00620703416', 'Civil', '3rd', 'anupam'),
('Ankit Sehrawat', '00720703116', 'IT', '3rd', 'ankit'),
('ANURAG PRASAD', '00720703416', 'Civil', '3rd', 'anurag'),
('ANKUSH KUMAR SINGH', '00820703116', 'IT', '3rd', 'ankush'),
('Avinash Kumar ', '00820703416', 'Civil', '3rd', 'avinash'),
('Ankush Rawat', '00920703116', 'IT', '3rd', 'ankush'),
('AVNEET LAHARIYA', '00920703416', 'Civil', '3rd', 'avneet'),
('Ashish Jha', '01020703116', 'IT', '3rd', 'ashish'),
('Beer bahadur', '01020703416', 'Civil', '3rd', 'beer'),
('Ashutosh kumar jha', '01120703116', 'IT', '3rd', 'ashutosh'),
('Bharat yadav', '01120703416', 'Civil', '3rd', 'bharat'),
('Avinash Sharma', '01220703116', 'IT', '3rd', 'avinash'),
('Brijesh pandey', '01220703416', 'Civil', '3rd', 'brijesh'),
('AVNISH', '01320703116', 'IT', '3rd', 'avnish'),
('Chanchal', '01320703416', 'Civil', '3rd', 'chanchal'),
('dhirender Bisht', '01420703416', 'Civil', '3rd', 'dhirender'),
('DEEPAK MAURYA', '01520703116', 'IT', '3rd', 'deepak'),
('FARHAN ALI MANSOORI', '01520703416', 'Civil', '3rd', 'farhan'),
('Dinesh kumar', '01620703116', 'IT', '3rd', 'dinesh'),
('INDER KUMAR YADAV', '01620703416', 'Civil', '3rd', 'inder'),
('Divya Mahendia', '01720703116', 'IT', '3rd', 'divya'),
('JITENDRA SINGH BISHT', '01720703416', 'Civil', '3rd', 'jitendra'),
('Gautam kumar', '01820703116', 'IT', '3rd', 'gautam'),
('Kapil Jorwal', '01820703416', 'Civil', '3rd', 'kapil'),
('GAUTAM PANDEY', '01920703116', 'IT', '3rd', 'gautam'),
('Manish Kataria', '01920703416', 'Civil', '3rd', 'manish'),
('Himanshu', '02020703116', 'IT', '3rd', 'himanshu'),
('Manjesh kumar gupta', '02020703416', 'Civil', '3rd', 'manjesh'),
('Jagvinder Singh', '02120703116', 'IT', '3rd', 'jagvinder'),
('Mayank Gupta', '02120703416', 'Civil', '3rd', 'mayank'),
('Jeetin kumar anand', '02220703116', 'IT', '3rd', 'jeetin'),
('Md. Aftab Ansari', '02220703416', 'Civil', '3rd', 'md.'),
('Jyoti singh', '02320703116', 'IT', '3rd', 'jyoti'),
('MD OBAID RUB', '02320703416', 'Civil', '3rd', 'md'),
('Mohd Sohail ', '02420703416', 'Civil', '3rd', 'mohd'),
('Kishore Kumar ', '02520703116', 'IT', '3rd', 'kishore'),
('MUKHTAR TANZEEM', '02520703416', 'Civil', '3rd', 'mukhtar'),
('Navneet Singh', '02620703416', 'Civil', '3rd', 'navneet'),
('Nikhil Gautam', '02820703416', 'Civil', '3rd', 'nikhil'),
('mohammad usman', '02920703116', 'IT', '3rd', 'mohammad'),
('Ojas Dagar', '02920703416', 'Civil', '3rd', 'ojas'),
('Monika', '03020703116', 'IT', '3rd', 'monika'),
('Prakhar sharma', '03020703416', 'Civil', '3rd', 'prakhar'),
('PRABHUNATH KUMAR', '03220703116', 'IT', '3rd', 'prabhunath'),
('Rashid shams', '03220703416', 'Civil', '3rd', 'rashid'),
('Raghav Juneja', '03320703116', 'IT', '3rd', 'raghav'),
('Rishabh Chauhan', '03320703416', 'Civil', '3rd', 'rishabh'),
('Rahul', '03420703116', 'IT', '3rd', 'rahul'),
('Rishik Kumar', '03420703416', 'Civil', '3rd', 'rishik'),
('Ritesh kumar', '03520703416', 'Civil', '3rd', 'ritesh'),
('Rajnish', '03620703116', 'IT', '3rd', 'rajnish'),
('Rohan', '03620703416', 'Civil', '3rd', 'rohan'),
('Rohan Saroha', '03720703116', 'IT', '3rd', 'rohan'),
('ROHIT ', '03720703416', 'Civil', '3rd', 'rohit'),
('S.R. Aman', '03920703116', 'IT', '3rd', 's.r.'),
('Sanjay Kumar Meena', '03920703416', 'Civil', '3rd', 'sanjay'),
('Sachin Kumar', '04020703116', 'IT', '3rd', 'sachin'),
('Sarvjeet kumar', '04020703416', 'Civil', '3rd', 'sarvjeet'),
('Saurabh kumar', '04120703416', 'Civil', '3rd', 'saurabh'),
('Salman Khan', '04220703116', 'IT', '3rd', 'salman'),
('SHASHANK PRATAP SINGH', '04220703416', 'Civil', '3rd', 'shashank'),
('Shivam Sharma', '04320703416', 'Civil', '3rd', 'shivam'),
('Shoray Sharma', '04420703416', 'Civil', '3rd', 'shoray'),
('Shadab sayeed', '04520703116', 'IT', '3rd', 'shadab'),
('Shubham rai', '04520703416', 'Civil', '3rd', 'shubham'),
('Shashank uniyal', '04620703116', 'IT', '3rd', 'shashank'),
('Sonam Dolker', '04620703416', 'Civil', '3rd', 'sonam'),
('Shatakshi Vashishtha ', '04720703116', 'IT', '3rd', 'shatakshi'),
('TARUN CHAUDHARY', '04720703416', 'Civil', '3rd', 'tarun'),
('SIDHARTH BISHT', '04820703116', 'IT', '3rd', 'sidharth'),
('UJJAWAL AGGARWAL', '04820703416', 'Civil', '3rd', 'ujjawal'),
('Suraj Garg', '04920703116', 'IT', '3rd', 'suraj'),
('VIPIN', '04920703416', 'Civil', '3rd', 'vipin'),
('Utkarsh Malviya', '05120703116', 'IT', '3rd', 'utkarsh'),
('Vivek Agrahari', '05120703416', 'Civil', '3rd', 'vivek'),
('Vikas deep', '05220703116', 'IT', '3rd', 'vikas'),
('ZIAUL HUDA', '05220703416', 'Civil', '3rd', 'ziaul'),
('Vishal meena', '05320703116', 'IT', '3rd', 'vishal'),
('YOGESH KUMAR', '05420703116', 'IT', '3rd', 'yogesh'),
('RAGHAV PANKAJ', '20120703416', 'Civil', '3rd', 'raghav'),
('Maninder Singh', '27201703116', 'IT', '3rd', 'maninder'),
('Akshita Agrawal', '40120703116', 'IT', '3rd', 'akshita'),
('Bhaskar  kumar ', '40120703416', 'Civil', '3rd', 'bhaskar'),
('Rahul', '40220701316', 'IT', '3rd', 'rahul'),
('Sahil madaan', '40320703116', 'IT', '3rd', 'sahil'),
('Parth ujjwal', '40320703416', 'Civil', '3rd', 'parth'),
('atul khatri', '40420703116', 'IT', '3rd', 'atul'),
('RAVI KUMAR SINGH', '40420703416', 'Civil', '3rd', 'ravi'),
('ATIF KHAN', '40520703116', 'IT', '3rd', 'atif'),
('ashish mishra', '40520703416', 'Civil', '3rd', 'ashish'),
('Akash pratap gond', '40720703416', 'Civil', '3rd', 'akash'),
('ASHISH SINGH', '40820703116', 'IT', '3rd', 'ashish'),
('Deepak kumar choudhary', '40820703416', 'Civil', '3rd', 'deepak'),
('nisha rawat', '40920703116', 'IT', '3rd', 'nisha'),
('Anjali kumari', '41120703116', 'IT', '3rd', 'anjali'),
('Rohit kumar yadav ', '41120703416', 'Civil', '3rd', 'rohit'),
('Manil k sharma', '41220703116', 'IT', '3rd', 'manil'),
('Naveen Kumar Singh', '41220703416', 'Civil', '3rd', 'naveen'),
('Suraj yadav ', '41320703116', 'IT', '3rd', 'suraj'),
('Nikhil', '41320703416', 'Civil', '3rd', 'nikhil'),
('Sujeet Singh', '41420703416', 'Civil', '3rd', 'sujeet'),
('Himanshu Sahni', '41520703116', 'IT', '3rd', 'himanshu'),
('BEERU KUMAR YADAV', '41520703416', 'Civil', '3rd', 'beeru'),
('Prabhakar yadav', '41620703116', 'IT', '3rd', 'prabhakar'),
('Nadeem amsari', '41620703416', 'Civil', '3rd', 'nadeem'),
('Dhruv Karan', '41720703116', 'IT', '3rd', 'dhruv'),
('Renu', '41720703416', 'Civil', '3rd', 'renu'),
('Shaurabh mishra', '41820703116', 'IT', '3rd', 'shaurabh'),
('Akshay Dhama', '41820703416', 'Civil', '3rd', 'akshay'),
('IMRAN ALI MANSOORI', '41920703416', 'Civil', '3rd', 'imran'),
('Shubham jangid', '42020703116', 'IT', '3rd', 'shubham'),
('Amarjeet', '42120703116', 'IT', '3rd', 'amarjeet'),
('GYAN CHAND PRASAD', '42120703416', 'Civil', '3rd', 'gyan'),
('Ankur', '42220703416', 'Civil', '3rd', 'ankur');

-- --------------------------------------------------------

--
-- Table structure for table `log3`
--

CREATE TABLE `log3` (
  `Name` varchar(21) DEFAULT NULL,
  `Enrollment_No` varchar(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Semester` varchar(3) DEFAULT NULL,
  `Password` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `log3`
--

INSERT INTO `log3` (`Name`, `Enrollment_No`, `Department`, `Semester`, `Password`) VALUES
('Abdul Gaffur', '00120703415', 'Civil', '5th', 'abdul'),
('Ashish', '00120707716', 'IT', '5th', 'ashish'),
('Amit Kumar Rai', '00120707916', 'Civil', '5th', 'amit'),
('Abhimanyu Yadav', '00220703115', 'IT', '5th', 'abhimanyu'),
('ABDULLAH KHALID', '00220703415', 'Civil', '5th', 'abdullah'),
('Aanchal Gupta', '00220705615', 'Environment', '5th', 'aanchal'),
('Dilip Chaudhary', '00220707916', 'Civil', '5th', 'dilip'),
('KAUSHAL KUMAR MEENA', '00220708016', 'Environment', '5th', 'kaushal'),
('ADITYA NARAYAN', '00320703115', 'IT', '5th', 'aditya'),
('ADITYA KUMAR', '00320703415', 'Civil', '5th', 'aditya'),
('Tanya Sharma', '00320707716', 'IT', '5th', 'tanya'),
('KAPIL KASANA', '00320707916', 'Civil', '5th', 'kapil'),
('Aman Gupta', '00420703115', 'IT', '5th', 'aman'),
('Tejaswini', '00420707716', 'IT', '5th', 'tejaswini'),
('MOHIT KUMAR', '00420707916', 'Civil', '5th', 'mohit'),
('Animesh Jain', '00520703115', 'IT', '5th', 'animesh'),
('Ajay kumar', '00520703415', 'Civil', '5th', 'ajay'),
('VANDANA', '00520707716', 'IT', '5th', 'vandana'),
('PRABHAKAR JHA', '00520707916', 'Civil', '5th', 'prabhakar'),
('Ankit kumar', '00620703115', 'IT', '5th', 'ankit'),
('Amit shukla', '00620703415', 'Civil', '5th', 'amit'),
('ayushman bhattacharya', '00620705615', 'Environment', '5th', 'ayushman'),
('VIKRAM CHAND', '00620707716', 'IT', '5th', 'vikram'),
('UMAR IQBAL', '00620707916', 'Civil', '5th', 'umar'),
('Ankur Tanwar', '00720703115', 'IT', '5th', 'ankur'),
('Anil Kumar', '00720703415', 'Civil', '5th', 'anil'),
('Anshu Kumar Gupta', '00820703115', 'IT', '5th', 'anshu'),
('ATUL SHARMA', '00920703115', 'IT', '5th', 'atul'),
('Anubhav Bhardwaj', '00920703415', 'Civil', '5th', 'anubhav'),
('Anurag Bhardwaj', '01020703415', 'Civil', '5th', 'anurag'),
('Mayank Goyal', '01020705615', 'Environment', '5th', 'mayank'),
('DEEPAK YADAV', '01120703115', 'IT', '5th', 'deepak'),
('Ashutosh', '01120703415', 'Civil', '5th', 'ashutosh'),
('Sanjay Kumar koli', '01120705615', 'Environment', '5th', 'sanjay'),
('Ashutosh Kumar Jha', '01220703415', 'Civil', '5th', 'ashutosh'),
('Sanyukt Singh Gehlot', '01220705615', 'Environment', '5th', 'sanyukt'),
('Dhiraj kumar', '01320703115', 'IT', '5th', 'dhiraj'),
('Ayush Rajput', '01320703415', 'Civil', '5th', 'ayush'),
('Chitranjan meena ', '01420703415', 'Civil', '5th', 'chitranjan'),
('Tanya Sharma', '01420705615', 'Environment', '5th', 'tanya'),
('HEMANT MALIK', '01520703115', 'IT', '5th', 'hemant'),
('DEVESH GARG', '01620703415', 'Civil', '5th', 'devesh'),
('himanshu kumar', '01720703115', 'IT', '5th', 'himanshu'),
('Divij Joshi', '01720703415', 'Civil', '5th', 'divij'),
('Himanshu yadav', '01820703115', 'IT', '5th', 'himanshu'),
('GAUTAM KUMAR', '01820703415', 'Civil', '5th', 'gautam'),
('HIMANSHU GAURAV', '02020703415', 'Civil', '5th', 'himanshu'),
('Kanupriya', '02120703115', 'IT', '5th', 'kanupriya'),
('Lakshay Piplani', '02220703115', 'IT', '5th', 'lakshay'),
('JAVED HUSSAIN', '02220703415', 'Civil', '5th', 'javed'),
('LALIT KUMAR', '02320703115', 'IT', '5th', 'lalit'),
('Jawala Prasad Meena', '02320703415', 'Civil', '5th', 'jawala'),
('KRISHNA KUMAR SHARMA', '02420703415', 'Civil', '5th', 'krishna'),
('kshitij kumar ghoshit', '02520703415', 'Civil', '5th', 'kshitij'),
('Manoj Kumar', '02620703115', 'IT', '5th', 'manoj'),
('MAYANK', '02720703415', 'Civil', '5th', 'mayank'),
('Manoj yadav', '02820703115', 'IT', '5th', 'manoj'),
('naveen kumar yadav', '02820703415', 'Civil', '5th', 'naveen'),
('Naveen Raj Shrivastav', '02920703415', 'Civil', '5th', 'naveen'),
('Monika Bisht', '03020703115', 'IT', '5th', 'monika'),
('Neeraj kumar', '03020703415', 'Civil', '5th', 'neeraj'),
('NEELKAMAL CHAUDHARY', '03120703115', 'IT', '5th', 'neelkamal'),
('NEERAJ KUMAR SHARMA ', '03120703415', 'Civil', '5th', 'neeraj'),
('Neeraj', '03220703115', 'IT', '5th', 'neeraj'),
('Nikhil', '03220703415', 'Civil', '5th', 'nikhil'),
('Nitin', '03320703115', 'IT', '5th', 'nitin'),
('Nishant Bhickta', '03420703415', 'Civil', '5th', 'nishant'),
('Prashant sharma', '03520703115', 'IT', '5th', 'prashant'),
('PAWAN KUMAR', '03520703415', 'Civil', '5th', 'pawan'),
('pratibha', '03620703115', 'IT', '5th', 'pratibha'),
('PIYUSH KUMAR PANDEY', '03620703415', 'Civil', '5th', 'piyush'),
('PREM SAGAR GUPTA', '03720703415', 'Civil', '5th', 'prem'),
('Reena yadav', '03820703115', 'IT', '5th', 'reena'),
('Rinku Singh', '03920703115', 'IT', '5th', 'rinku'),
('Rohit kumar', '04020703115', 'IT', '5th', 'rohit'),
('rahul thakur', '04020703415', 'Civil', '5th', 'rahul'),
('ROHIT YADAV', '04120703115', 'IT', '5th', 'rohit'),
('Rakesh sheshma', '04120703415', 'Civil', '5th', 'rakesh'),
('ROHITASH KUMAR SHARMA', '04220703115', 'IT', '5th', 'rohitash'),
('RAM KUMAR', '04220703415', 'Civil', '5th', 'ram'),
('SAHIL SHARMA', '04320703115', 'IT', '5th', 'sahil'),
('Ravi Shankar Thakur ', '04320703415', 'Civil', '5th', 'ravi'),
('Shreya kumari ', '04420703115', 'IT', '5th', 'shreya'),
('ROHIT MEHRA', '04420703415', 'Civil', '5th', 'rohit'),
('sachin khoshu', '04520703415', 'Civil', '5th', 'sachin'),
('sagheer ahmad', '04620703415', 'Civil', '5th', 'sagheer'),
('Sahil Arora', '04720703415', 'Civil', '5th', 'sahil'),
('Sourav Thakur', '04820703115', 'IT', '5th', 'sourav'),
('SANDEEP MEENA', '04820703415', 'Civil', '5th', 'sandeep'),
('Sumit', '04920703115', 'IT', '5th', 'sumit'),
('sarvre aazam', '04920703415', 'Civil', '5th', 'sarvre'),
('Sushant Garg', '05020703115', 'IT', '5th', 'sushant'),
('MD SHAHZAD SAIFI', '05020703415', 'Civil', '5th', 'md'),
('UTKARSH PANDEY', '05120703115', 'IT', '5th', 'utkarsh'),
('Shekhar Singh', '05120703415', 'Civil', '5th', 'shekhar'),
('varsha', '05220703115', 'IT', '5th', 'varsha'),
('Somnath Pathak', '05220703415', 'Civil', '5th', 'somnath'),
('varsha', '05320703115', 'IT', '5th', 'varsha'),
('SUDEEP NIGAM', '05320703415', 'Civil', '5th', 'sudeep'),
('Varun Singh', '05420703115', 'IT', '5th', 'varun'),
('Vijay Kumar', '05520703115', 'IT', '5th', 'vijay'),
('Tharmesh', '05520703415', 'Civil', '5th', 'tharmesh'),
('Wilson', '05620703115', 'IT', '5th', 'wilson'),
('Utkarsh Sharma', '05720703415', 'Civil', '5th', 'utkarsh'),
('VIKRAM KUMAR MEENA', '05920703415', 'Civil', '5th', 'vikram'),
('Vishal', '06020703415', 'Civil', '5th', 'vishal'),
('Vishal Pundir', '06120703415', 'Civil', '5th', 'vishal'),
('VISHAL RALOT', '06220703415', 'Civil', '5th', 'vishal'),
('Vishwambher bareja', '06320703415', 'Civil', '5th', 'vishwambher'),
('VIVEK KUMAR', '06420703415', 'Civil', '5th', 'vivek'),
('Sweta kumari', '10120703115', 'IT', '5th', 'sweta'),
('Ankit Kumar', '10120703415', 'Civil', '5th', 'ankit'),
('SURAJ SINGH RAWAT', '10220703115', 'IT', '5th', 'suraj'),
('Ashwani kumar', '10220703415', 'Civil', '5th', 'ashwani'),
('Abhishek Rai', '10320703115', 'IT', '5th', 'abhishek'),
('Pankaj kumar', '10320703415', 'Civil', '5th', 'pankaj'),
('anand yadav', '40120703115', 'IT', '5th', 'anand'),
('Abhishek Garg', '40120703415', 'Civil', '5th', 'abhishek'),
('Rishank', '40120705615', 'Environment', '5th', 'rishank'),
('PRADEEP KUMAR', '40120707716', 'IT', '5th', 'pradeep'),
('ANKIT', '40120707916', 'Civil', '5th', 'ankit'),
('Aditya kaushik', '40220703115', 'IT', '5th', 'aditya'),
('Km akanksha ', '40220703415', 'Civil', '5th', 'km'),
('MOHIT VERMA', '40220707716', 'IT', '5th', 'mohit'),
('Pramod', '40220707916', 'Civil', '5th', 'pramod'),
('Prerak chaturvedi', '40320703415', 'Civil', '5th', 'prerak'),
('Shruti Geeta', '40320705615', 'Environment', '5th', 'shruti'),
('Manish Kumar', '40420703115', 'IT', '5th', 'manish'),
('HIMANSHU', '40420703415', 'Civil', '5th', 'himanshu'),
('Anish Kumar Gupta ', '40420705615', 'Environment', '5th', 'anish'),
('Aditya Singh', '40520703115', 'IT', '5th', 'aditya'),
('Syed ali yasa', '40520703415', 'Civil', '5th', 'syed'),
('HARSH DABAS', '40520705615', 'Environment', '5th', 'harsh'),
('Aniket tomar', '40620703115', 'IT', '5th', 'aniket'),
('Akshansh Dabas', '40620703415', 'Civil', '5th', 'akshansh'),
('DINESH SAINI', '40620705615', 'Environment', '5th', 'dinesh'),
('Mukul Singhal', '40720703115', 'IT', '5th', 'mukul'),
('Abhishek ', '40720703415', 'Civil', '5th', 'abhishek'),
('Govind', '40820703415', 'Civil', '5th', 'govind'),
('Priyanshi Raturi', '40820705615', 'Environment', '5th', 'priyanshi'),
('Deepak kumar', '40920703115', 'IT', '5th', 'deepak'),
('Ajay Kumar Giri', '40920703415', 'Civil', '5th', 'ajay'),
('ARVIND KUMAR', '40920705615', 'Environment', '5th', 'arvind'),
('Paras Dabas', '41020703115', 'IT', '5th', 'paras'),
('Rajnish Khatri', '41020703415', 'Civil', '5th', 'rajnish'),
('Akash mishra', '41020705615', 'Environment', '5th', 'akash'),
('RAM NARAYAN TIWARI', '41120705615', 'Environment', '5th', 'ram'),
('Ankit Pal', '41220703115', 'IT', '5th', 'ankit'),
('Himanshu ', '41220705615', 'Environment', '5th', 'himanshu'),
('Sachin Sehrawat', '41320705615', 'Environment', '5th', 'sachin'),
('Anurag Ojha ', '41420703115', 'IT', '5th', 'anurag'),
('Shivani Gupta', '41420705615', 'Environment', '5th', 'shivani'),
('Akash Yadav', '41520703115', 'IT', '5th', 'akash'),
('Pratiksha Pathak', '41520705615', 'Environment', '5th', 'pratiksha'),
('KRITIKA GARG', '41620703115', 'IT', '5th', 'kritika'),
('ANKUSH KUMAR', '41820703115', 'IT', '5th', 'ankush'),
('SADDAM HUSAIN', '41820705615', 'Environment', '5th', 'saddam'),
('SUMIT KUMAR', '42020705615', 'Environment', '5th', 'sumit'),
('AAKASH  DOOLYA', '42120705615', 'Environment', '5th', 'aakash'),
('Uma shankar', '42220705615', 'Environment', '5th', 'uma'),
('Dinesh solanki', '60020703415', 'Civil', '5th', 'dinesh');

-- --------------------------------------------------------

--
-- Table structure for table `log4`
--

CREATE TABLE `log4` (
  `Name` varchar(27) DEFAULT NULL,
  `Enrollment_No` varchar(11) NOT NULL,
  `Department` varchar(11) DEFAULT NULL,
  `Semester` varchar(3) DEFAULT NULL,
  `Password` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `log4`
--

INSERT INTO `log4` (`Name`, `Enrollment_No`, `Department`, `Semester`, `Password`) VALUES
('Nishant kumar', '00120708015', 'Environment', '7th', 'nishant'),
('SHIVAM KULSHRESTHA', '00220703414', 'Civil', '7th', 'shivam'),
('Manish Kumar', '00220707715', 'IT', '7th', 'manish'),
('Mohit', '00220707915', 'Civil', '7th', 'mohit'),
('Kishor das', '00320703114', 'IT', '7th', 'kishor'),
('NISHI KANT', '00320707715', 'IT', '7th', 'nishi'),
('NAGESH PRATAP SINGH', '00320707915', 'Civil', '7th', 'nagesh'),
('Priyanshu Aman', '00420703414', 'Civil', '7th', 'priyanshu'),
('Pooja Pal', '00420707715', 'IT', '7th', 'pooja'),
('Pankaj Sharma', '00420707915', 'Civil', '7th', 'pankaj'),
('Ankur Goyak', '00520703414', 'Civil', '7th', 'ankur'),
('Chander Prakash', '00520705614', 'Environment', '7th', 'chander'),
('RAHUL', '00520707915', 'Civil', '7th', 'rahul'),
('indresh kumar tripathi', '00620705614', 'Environment', '7th', 'indresh'),
('rohit', '00620707915', 'Civil', '7th', 'rohit'),
('ANKIT KUMAR KUSHWAHA', '00720703414', 'Civil', '7th', 'ankit'),
('VIKAS SINGH PRAJESH', '00720707715', 'IT', '7th', 'vikas'),
('Sanjeev Raturi ', '00720707915', 'Civil', '7th', 'sanjeev'),
('Amit Kumar Mandal', '00820703114', 'IT', '7th', 'amit'),
('Piyush Kumar rai', '00820703414', 'Civil', '7th', 'piyush'),
('Aishwarya Rani', '00820705614', 'Environment', '7th', 'aishwarya'),
('Umesh', '00820707915', 'Civil', '7th', 'umesh'),
('Prakash Babu Sharma', '00920703114', 'IT', '7th', 'prakash'),
('Vidrum gaur', '00920703414', 'Civil', '7th', 'vidrum'),
('Mohd Seraj Alam', '01020703114', 'IT', '7th', 'mohd'),
('Akash Radhakrishnan', '01020705614', 'Environment', '7th', 'akash'),
('rahul kumar tiwari', '01120703114', 'IT', '7th', 'rahul'),
('ASHISH', '01320703414', 'Civil', '7th', 'ashish'),
('Ankit Kumar Bhardwaj', '01420703114', 'IT', '7th', 'ankit'),
('MOHAMMAD SHAHRUKH', '01520703114', 'IT', '7th', 'mohammad'),
('AKSHAY DAS', '01520703414', 'Civil', '7th', 'akshay'),
('varun taneja', '01620703114', 'IT', '7th', 'varun'),
('SOBHAN PATTAJOSHI', '01620703414', 'Civil', '7th', 'sobhan'),
('PRABHAT KUMAR', '01620705614', 'Environment', '7th', 'prabhat'),
('Bharat Jain', '01720703114', 'IT', '7th', 'bharat'),
('NAVEEN KUMAR JHA', '01720703414', 'Civil', '7th', 'naveen'),
('Anant Srivastava', '01820703414', 'Civil', '7th', 'anant'),
('Ravinder kumar', '01920703114', 'IT', '7th', 'ravinder'),
('Ajay Singh', '01920703414', 'Civil', '7th', 'ajay'),
('Nitish Kumar', '02020703114', 'IT', '7th', 'nitish'),
('ABHINASH', '02020703414', 'Civil', '7th', 'abhinash'),
('Pankaj Singh', '02120703114', 'IT', '7th', 'pankaj'),
('shubham sharma', '02120703414', 'Civil', '7th', 'shubham'),
('VISHWANATH', '02220703114', 'IT', '7th', 'vishwanath'),
('SHASHANK KUMAR', '02220703414', 'Civil', '7th', 'shashank'),
('Nishant vats', '02320703114', 'IT', '7th', 'nishant'),
('Shekhar Singh chauhan', '02320703414', 'Civil', '7th', 'shekhar'),
('abhay sehgal', '02420703114', 'IT', '7th', 'abhay'),
('Gaurav kumar das', '02420703414', 'Civil', '7th', 'gaurav'),
('anupam shukla', '02520703114', 'IT', '7th', 'anupam'),
('Divianshu Bhardwaj', '02520703414', 'Civil', '7th', 'divianshu'),
('PRAKASH KUMAR', '02520705614', 'Environment', '7th', 'prakash'),
('Ujjwal Goyal', '02620703114', 'IT', '7th', 'ujjwal'),
('Abhishek Kaushik ', '02620703414', 'Civil', '7th', 'abhishek'),
('Mohit', '02712703114', NULL, '7', 'mohit'),
('Kuldeep kumar jain', '02720703114', 'IT', '7th', 'kuldeep'),
('Prashant Pratik', '02820703114', 'IT', '7th', 'prashant'),
('PARAM SHARMA', '02820703414', 'Civil', '7th', 'param'),
('Gautam', '02920703114', 'IT', '7th', 'gautam'),
('RAJA BABU', '02920703414', 'Civil', '7th', 'raja'),
('Manish Kumar Jha', '03020703414', 'Civil', '7th', 'manish'),
('PRIYA SAXENA', '03120703114', 'IT', '7th', 'priya'),
('Ankit verma', '03120703414', 'Civil', '7th', 'ankit'),
('shantanu sharma', '03220703414', 'Civil', '7th', 'shantanu'),
('Nishant singh', '03320703114', 'IT', '7th', 'nishant'),
('Chetan Jangid', '03320703414', 'Civil', '7th', 'chetan'),
('Piyush Vats', '03420703114', 'IT', '7th', 'piyush'),
('Aakash Singhal', '03420703414', 'Civil', '7th', 'aakash'),
('SONIA', '03420705614', 'Environment', '7th', 'sonia'),
('Vipul Tripathi', '03520703114', 'IT', '7th', 'vipul'),
('Kartik sharma', '03520703414', 'Civil', '7th', 'kartik'),
('Gaurav', '03520705614', 'Environment', '7th', 'gaurav'),
('Abha Kumari ', '03620703114', 'IT', '7th', 'abha'),
('ARCHIT GARG ', '03620703414', 'Civil', '7th', 'archit'),
('Sameer Kaushik', '03720703114', 'IT', '7th', 'sameer'),
('Ghanshyam Kumar', '03720705614', 'Environment', '7th', 'ghanshyam'),
('Vishal Shokeen', '03820703414', 'Civil', '7th', 'vishal'),
('Ashish kaushik', '03820705614', 'Environment', '7th', 'ashish'),
('Osho Kumar', '03920703114', 'IT', '7th', 'osho'),
('SURAJ NEGI', '03920705614', 'Environment', '7th', 'suraj'),
('Amit ', '03930703414', 'Civil', '7th', 'amit'),
('Tushar Prince', '04020703414', 'Civil', '7th', 'tushar'),
('PUSHKAR ADHIKARI', '04020705614', 'Environment', '7th', 'pushkar'),
('Prashu Shukla', '04120703114', 'IT', '7th', 'prashu'),
('Kapil Sharma', '04120705614', 'Environment', '7th', 'kapil'),
('Sonu jha', '04220703114', 'IT', '7th', 'sonu'),
('Himanshu Kumar', '04220703414', 'Civil', '7th', 'himanshu'),
('Shulbha singh', '04220705614', 'Environment', '7th', 'shulbha'),
('Vaibhav kant', '04320705614', 'Environment', '7th', 'vaibhav'),
('Anju Gulia', '04420705614', 'Environment', '7th', 'anju'),
('Arun Gupta', '04520703114', 'IT', '7th', 'arun'),
('Anunay kumar', '04520703414', 'Civil', '7th', 'anunay'),
('Amir Karim', '04620703114', 'IT', '7th', 'amir'),
('Mohit Shokhanda', '04620703414', 'Civil', '7th', 'mohit'),
('Santosh kumar', '04720703114', 'IT', '7th', 'santosh'),
('TARUNSHOKEEN', '04720703414', 'Civil', '7th', 'tarun'),
('Tamchos Thinles', '04820703413', 'Civil', '7th', 'tamchos'),
('Dheeraj Kumar', '04820703414', 'Civil', '7th', 'dheeraj'),
('Inderjeet', '04920703114', 'IT', '7th', 'inderjeet'),
('Rahul', '05020703414', 'Civil', '7th', 'rahul'),
('Santoshi', '05120703114', 'IT', '7th', 'santoshi'),
('ATUL SHAKYA ', '05120703414', 'Civil', '7th', 'atul'),
('Hrithik Arya', '05220703414', 'Civil', '7th', 'hrithik'),
('KRISHNA GOPAL DASS KAIMRANA', '05320703414', 'Civil', '7th', 'krishna'),
('Chaman Gupta', '05420703414', 'Civil', '7th', 'chaman'),
('Sushant beriwal', '05520703114', 'IT', '7th', 'sushant'),
('NIKHIL YADAV', '05620703114', 'IT', '7th', 'nikhil'),
('Shubham Chauhan', '05620703414', 'Civil', '7th', 'shubham'),
('Arun kumar', '05720703114', 'IT', '7th', 'arun'),
('Ankit punia', '05820703414', 'Civil', '7th', 'ankit'),
('Rajeev Prajapati', '05920703414', 'Civil', '7th', 'rajeev'),
('Sahil Sharma', '06020703114', 'IT', '7th', 'sahil'),
('rohit singh', '06120703414', 'Civil', '7th', 'rohit'),
('ASHOK ANAND', '06320703114', 'IT', '7th', 'ashok'),
('SATISH KUMAR', '06520703114', 'IT', '7th', 'satish'),
('VIVEK', '06520703414', 'Civil', '7th', 'vivek'),
('Devesh Singh', '06620703414', 'Civil', '7th', 'devesh'),
('Akash', '06720703414', 'Civil', '7th', 'akash'),
('Rahul mandal', '06820703414', 'Civil', '7th', 'rahul'),
('Sachin Kumar', '06920703114', 'IT', '7th', 'sachin'),
('Brijesh ', '06920703414', 'Civil', '7th', 'brijesh'),
('Sushil kumar mathur', '07020703114', 'IT', '7th', 'sushil'),
('Anshul kumar katheria ', '07020703414', 'Civil', '7th', 'anshul'),
('Ashish', '07120703414', 'Civil', '7th', 'ashish'),
('PARIDHI SUGAN', '07220703114', 'IT', '7th', 'paridhi'),
('PUSHPENDRA SINGH MEENA', '07220703414', 'Civil', '7th', 'pushpendra'),
('Manjeet singh', '07320703114', 'IT', '7th', 'manjeet'),
('Arun', '07320703414', 'Civil', '7th', 'arun'),
('HARISH KUMAR', '07420703114', 'IT', '7th', 'harish'),
('Ankit kumar', '07420703414', 'Civil', '7th', 'ankit'),
('Sagar Saini', '07520703114', 'IT', '7th', 'sagar'),
('ABHISHEK', '07520703414', 'Civil', '7th', 'abhishek'),
('Ujjwal kumar pandey', '07620703114', 'IT', '7th', 'ujjwal'),
('MD MUSHFIQUE', '07620703414', 'Civil', '7th', 'md'),
('Lakhan Singh', '07720703114', 'IT', '7th', 'lakhan'),
('shashi prabhat', '07720703414', 'Civil', '7th', 'shashi'),
('SOURAV RAWAT', '07820703114', 'IT', '7th', 'sourav'),
('GOVIND', '07820703414', 'Civil', '7th', 'govind'),
('RAVI SINGH', '07920703114', 'IT', '7th', 'ravi'),
('Kunar', '07920703414', 'Civil', '7th', 'kunar'),
('ravi kumar', '08020603414', 'Civil', '7th', 'ravi'),
('Shifa Faizi', '08020703114', 'IT', '7th', 'shifa'),
('Abhishek Chaubey', '08120703114', 'IT', '7th', 'abhishek'),
('Rohit sahu', '08120703414', 'Civil', '7th', 'rohit'),
('VIKRAM KUMAR PODDAR', '08220703114', 'IT', '7th', 'vikram'),
('Prabhat Chander Mishra', '08320703114', 'IT', '7th', 'prabhat'),
('Vishal Girsa', '08320703414', 'Civil', '7th', 'vishal'),
('PARAS CHUGH ', '08420703114', 'IT', '7th', 'paras'),
('MD NAUSHAD ALAM', '08520703114', 'IT', '7th', 'md'),
('Pawan kumar', '08720703114', 'IT', '7th', 'pawan'),
('Anurag Kumar', '08820703114', 'IT', '7th', 'anurag'),
('Anubhav Pandey', '40120707715', 'IT', '7th', 'anubhav'),
('Aadyaa Saxena', '60020703114', 'IT', '7th', 'aadyaa'),
('Raunak Sinha', '60020703414', 'Civil', '7th', 'raunak'),
('Abhishek kumar', '60120703414', 'Civil', '7th', 'abhishek'),
('Mubashshir Baseer', '60220703414', 'Civil', '7th', 'mubashshir');

-- --------------------------------------------------------

--
-- Table structure for table `logindatat`
--

CREATE TABLE `logindatat` (
  `Enrollment_No` varchar(15) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Name` varchar(120) DEFAULT NULL,
  `Email` varchar(70) DEFAULT NULL,
  `Semester` int(5) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `logindatat`
--

INSERT INTO `logindatat` (`Enrollment_No`, `Password`, `Name`, `Email`, `Semester`) VALUES
(NULL, 'rohit', 'Rohit Goyal', 'rohit.2@gmail.com', 7),
(NULL, 'monish', 'monish Yadav', 'yadav.2@gmail.com', 5),
(NULL, 'lalu', 'Lalu Yadav', 'lalu.2@gmail.com', 3),
(NULL, 'juyal', 'juyal Goyal', 'juyal.2@gmail.com', 1),
(NULL, 'bharat', 'Bharat Jain', 'jain.2@gmail.com', 2),
(NULL, 'omni', 'Omni Yadav', 'omni.2@gmail.com', 3),
(NULL, 'omnsdi', 'Omnsdi Yadav', 'omnsdfi.2@gmail.com', 3),
(NULL, 'om', 'Om Yadav', 'mo.2@gmail.com', 2),
(NULL, 'osdffm', 'Osdffm Yadav', 'asgmo.2@gmail.com', 4),
(NULL, 'rtyy', 'rtyy Yadav', 'sdfg.2@gmail.com', 4),
(NULL, 'tandvhvhnon', 'Tandvhvhnon Sir', NULL, 0),
('21', NULL, NULL, NULL, NULL),
('28', 'tandvhvhnon', 'Tandvhvhnon Sir', NULL, 0),
('29', 'tandvhvgjdrfghhnon', 'Tandvhvgjdrfghhnon Sir', NULL, 0),
('30', 'wadhwa', 'Wadhwa Sir', NULL, 0),
('31', 'wadhwa', 'Wadhwa Sir', NULL, 0),
('02620703114', 'ujjwal', 'Ujjwal', NULL, 0);

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
('6', 'Database', 6, 5),
('7', 'Cryptography', 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `teacherId` int(50) NOT NULL,
  `teacherName` varchar(100) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `email` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`teacherId`, `teacherName`, `phoneNumber`, `email`) VALUES
(2, 'KG Sir', '9652321456', NULL),
(6, 'KG Sir', '4521452145', NULL),
(7, 'KG Sir', '4521452145', NULL),
(8, 'Tandon Sir', '4521452145', NULL),
(9, 'Tandon Sir', '4521452145', NULL),
(10, 'Tandon Sir', '4521452145', NULL),
(11, 'Tandon Sir', '4521452145', NULL),
(12, 'Tandon Sir', '4521452145', NULL),
(13, 'Tandon Sir', '4521452145', NULL),
(14, 'Tandon Sir', '4521452145', NULL),
(15, 'Tandon Sir', '4521452145', NULL),
(16, 'Tandvhvhnon Sir', '45145', NULL),
(17, 'Tandvhvhnon Sir', '45145', NULL),
(18, 'Tandvhvhnon Sir', '45145', NULL),
(19, 'Tandvhvhnon Sir', '45145', NULL),
(20, 'Tandvhvhnon Sir', '45145', NULL),
(21, 'Tandvhvhnon Sir', '45145', NULL),
(22, 'Tandvhvhnon Sir', '45145', NULL),
(23, 'Tandvhvhnon Sir', '45145', NULL),
(24, 'Tandvhvhnon Sir', '45145', NULL),
(25, 'Tandvhvhnon Sir', '45145', NULL),
(26, 'Tandvhvhnon Sir', '45145', NULL),
(27, 'Tandvhvhnon Sir', '45145', NULL),
(28, 'Tandvhvgjdrfghhnon Sir', '45145', NULL),
(29, 'Tandvhvgjdrfghhnon Sir', '45145', NULL),
(30, 'Wadhwa Sir', '4512363632', NULL),
(31, 'Wadhwa Sir', '4512363632', NULL);

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
('2', 6),
('2', 7);

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
-- Indexes for table `form1`
--
ALTER TABLE `form1`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `form2`
--
ALTER TABLE `form2`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `form3`
--
ALTER TABLE `form3`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `form4`
--
ALTER TABLE `form4`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`Title`);

--
-- Indexes for table `log1`
--
ALTER TABLE `log1`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `log2`
--
ALTER TABLE `log2`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `log3`
--
ALTER TABLE `log3`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `log4`
--
ALTER TABLE `log4`
  ADD PRIMARY KEY (`Enrollment_No`);

--
-- Indexes for table `logindatat`
--
ALTER TABLE `logindatat`
  ADD UNIQUE KEY `Enrollment_No` (`Enrollment_No`);

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
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `assid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `teacherId` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
