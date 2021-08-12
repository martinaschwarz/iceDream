-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2021 at 10:45 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `G00387926`
--
CREATE DATABASE IF NOT EXISTS `G00387926` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `G00387926`;

-- --------------------------------------------------------

--
-- Table structure for table `PRODUCTS`
--

CREATE TABLE `PRODUCTS` (
  `ID` int(11) NOT NULL,
  `NAME` text NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `IMAGE` text NOT NULL,
  `PRICE` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `PRODUCTS`
--

INSERT INTO `PRODUCTS` (`ID`, `NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES
(1, 'Strawberry', 'Strawberry flavoured ice cream', 'images/1.png', 2.5),
(2, 'Vanilla', 'Vanilla flavoured ice cream', 'images/2.png', 2.5),
(3, 'Mango', 'Mango flavoured ice cream', 'images/3.png', 3),
(4, 'Pistacchio', 'Pistacchio flavoured ice cream', 'images/4.png', 3),
(5, 'Chocolate', 'Chocolate flavoured ice cream', 'images/5.png', 2.5),
(6, 'Raspberry', 'Raspberry flavoured ice cream', 'images/6.png', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `PRODUCTS`
--
ALTER TABLE `PRODUCTS`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `PRODUCTS`
--
ALTER TABLE `PRODUCTS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
