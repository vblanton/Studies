--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-2.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(20) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth integer,
    description text,
    has_life boolean,
    type text
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_pkey_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_pkey_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_pkey_seq OWNER TO freecodecamp;

--
-- Name: galaxy_pkey_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_pkey_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(20) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth integer,
    radius_in_km numeric(10,2),
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_pkey_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_pkey_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_pkey_seq OWNER TO freecodecamp;

--
-- Name: moon_pkey_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_pkey_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(20) NOT NULL,
    age_in_millions_of_years integer,
    distance_from_earth integer,
    has_life boolean,
    radius_in_km numeric(10,2),
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_pkey_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_pkey_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_pkey_seq OWNER TO freecodecamp;

--
-- Name: planet_pkey_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_pkey_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(20) NOT NULL,
    age_in_millions_of_years integer,
    distance_million_miles_from_earth integer,
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_pkey_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_pkey_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_pkey_seq OWNER TO freecodecamp;

--
-- Name: star_pkey_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_pkey_seq OWNED BY public.star.star_id;


--
-- Name: station; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.station (
    open boolean,
    station_id integer NOT NULL,
    planet_id integer,
    moon_id integer,
    name character varying(20) NOT NULL
);


ALTER TABLE public.station OWNER TO freecodecamp;

--
-- Name: station_pkey_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.station_pkey_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.station_pkey_seq OWNER TO freecodecamp;

--
-- Name: station_pkey_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.station_pkey_seq OWNED BY public.station.station_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_pkey_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_pkey_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_pkey_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_pkey_seq'::regclass);


--
-- Name: station station_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.station ALTER COLUMN station_id SET DEFAULT nextval('public.station_pkey_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', NULL, 0, 'Our most well known galaxy, our home.', true, 'spiral');
INSERT INTO public.galaxy VALUES (2, 'Andromeda', NULL, NULL, 'Named after the constellation it appears near in our sky, Andromeda Constellation', false, 'spiral');
INSERT INTO public.galaxy VALUES (3, 'Whirlpool', NULL, NULL, 'First galaxy to be named a spiral galaxy, easily seen from Earth.', false, 'spiral');
INSERT INTO public.galaxy VALUES (4, 'Black Eye', NULL, NULL, 'A dark band of light absorbing dust around it''s nucleaus gave it it''s name.', false, 'spiral');
INSERT INTO public.galaxy VALUES (5, 'Sombrero', NULL, NULL, 'A peculia galaxy of unclear specification that looks like a lit disk', false, 'NULL');
INSERT INTO public.galaxy VALUES (6, 'Tadpole', NULL, NULL, 'A spiral galaxy with a long tail of stars, assumed to be the consequence of a merger with another galaxy', false, 'NULL');


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'the moon', 4530, NULL, 1737.00, 1);
INSERT INTO public.moon VALUES (2, 'Demos', NULL, NULL, NULL, 8);
INSERT INTO public.moon VALUES (3, 'Phobos', NULL, NULL, NULL, 8);
INSERT INTO public.moon VALUES (4, 'Io', NULL, NULL, NULL, 5);
INSERT INTO public.moon VALUES (5, 'Europa', NULL, NULL, NULL, 5);
INSERT INTO public.moon VALUES (6, 'Ganymede', NULL, NULL, NULL, 5);
INSERT INTO public.moon VALUES (7, 'Titan', NULL, NULL, NULL, 6);
INSERT INTO public.moon VALUES (8, 'Enceladus', NULL, NULL, NULL, 6);
INSERT INTO public.moon VALUES (9, 'Ariel', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (10, 'Belinda', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (11, 'Bianca', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (12, 'Caliban', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (13, 'Cordelia', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (14, 'Cressida', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (15, 'Cupid', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (16, 'Desdemona', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (17, 'Ferdinand', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (18, 'Fracisco', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (19, 'Juliet', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (20, 'Mab', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (21, 'Margaret', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (22, 'Miranda', NULL, NULL, NULL, 7);
INSERT INTO public.moon VALUES (23, 'Oberon', NULL, NULL, NULL, 7);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 4543, NULL, NULL, 6378.00, 1);
INSERT INTO public.planet VALUES (2, 'Kepler-186f', NULL, NULL, NULL, 7454.00, 9);
INSERT INTO public.planet VALUES (3, 'Mercury', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (4, 'Venus', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (5, 'Jupiter', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (6, 'Saturn', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (7, 'Uranus', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (8, 'Mars', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (9, 'Neptune', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (10, 'Pluto', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (11, 'Eris', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (12, 'Makemake', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (13, 'Ceres', NULL, NULL, NULL, NULL, 1);
INSERT INTO public.planet VALUES (14, 'Haumea', NULL, NULL, NULL, NULL, 1);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'The Sun', 4603, 91, 1);
INSERT INTO public.star VALUES (2, 'Stephenson 2-18', NULL, NULL, 1);
INSERT INTO public.star VALUES (3, 'Mu Cephei', NULL, NULL, 1);
INSERT INTO public.star VALUES (4, 'RW Cephei', NULL, NULL, 1);
INSERT INTO public.star VALUES (5, 'Westerlund 1-26', NULL, NULL, 1);
INSERT INTO public.star VALUES (6, 'V 354 Cephei', NULL, NULL, 1);
INSERT INTO public.star VALUES (7, 'WHO G64', NULL, NULL, 1);
INSERT INTO public.star VALUES (8, 'KY Cygni', NULL, NULL, 1);
INSERT INTO public.star VALUES (9, 'Kepler-186', NULL, NULL, 1);


--
-- Data for Name: station; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.station VALUES (true, 1, NULL, 1, 'Fallhouse-1');
INSERT INTO public.station VALUES (false, 2, 1, NULL, 'Fallhouse-Original');
INSERT INTO public.station VALUES (true, 3, 2, NULL, 'Titan-6');


--
-- Name: galaxy_pkey_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_pkey_seq', 6, true);


--
-- Name: moon_pkey_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_pkey_seq', 23, true);


--
-- Name: planet_pkey_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_pkey_seq', 14, true);


--
-- Name: star_pkey_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_pkey_seq', 9, true);


--
-- Name: station_pkey_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.station_pkey_seq', 3, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: station station_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_name_key UNIQUE (name);


--
-- Name: station station_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_pkey PRIMARY KEY (station_id);


--
-- Name: moon moon_planet_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_galaxy_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: station station_moon_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_moon_fkey FOREIGN KEY (moon_id) REFERENCES public.moon(moon_id);


--
-- Name: station station_planet_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_planet_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- PostgreSQL database dump complete
--

