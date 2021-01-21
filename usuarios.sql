-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2018 a las 17:04:17
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodex-usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cod_cirif` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `ciudad` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `date_time_agg` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `passw` varchar(250) COLLATE utf8_spanish_ci NOT NULL,
  `nivel` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `cod_cirif`, `nombre`, `ciudad`, `direccion`, `email`, `date_time_agg`, `passw`, `nivel`) VALUES
(1, 'wcstelecom', 'J-12345678-9', 'Wcs Telecom', 'Caracas', 'La Urbina, calle Los Estafadores con calle Los Perdidos, Edif. Arboleda, Piso 2, Oficina 2-D, frente al puesto de empanadas de la Sra. Petra.', 'wcs@wcs.com.ve', '2017-03-08 01:42:55', '123456', 1),
(2, 'minicopro', 'V-20128651-0', 'Beto', 'Caracas', 'Calle Las Mentiras de Jaimito, con calle Puritana, Quinta Er Conde. Lomas Los Cerranitos. Distrito Capital', 'beto@beto.com', '2017-01-30 01:13:38', '123456', 1),
(42, 'carapagr', 'J-12345678-1', 'Carpa', 'Sucre', 'Calle los Sucreos', 'carpa@carpa.com.ve', '2017-03-08 01:42:30', '10203040', 2),
(84, 'maia', 'V-20128905-0', 'Maita', 'Caracas', 'Calle Las Mentiras de Jaimito, con calle Puritana, Quinta Er Conde. Lomas Los Cerranitos. Distrito Capital', 'beto@beto.com', '2017-03-10 01:35:13', '123456', 1),
(85, 'minicopro1', 'V-19400020-1', 'OldRatica', 'Tangamandapio', 'Calle Las Ratas, cruce con las Chiripas, Municipio Old', 'old@old.es', '2017-03-21 10:19:42', '12345678', 1);

--
-- Índices para tablas volcadas
--


--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;