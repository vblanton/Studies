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

DROP DATABASE worldcup;
--
-- Name: worldcup; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE worldcup WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE worldcup OWNER TO freecodecamp;

\connect worldcup

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
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    game_id integer NOT NULL,
    year integer NOT NULL,
    round character varying(15) NOT NULL,
    winner_id integer NOT NULL,
    opponent_id integer NOT NULL,
    winner_goals integer NOT NULL,
    opponent_goals integer NOT NULL
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.games_game_id_seq OWNER TO freecodecamp;

--
-- Name: games_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;


--
-- Name: teams; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.teams (
    team_id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.teams OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teams_team_id_seq OWNER TO freecodecamp;

--
-- Name: teams_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;


--
-- Name: games game_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);


--
-- Name: teams team_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES (166, 2018, 'Final', 969, 970, 4, 2);
INSERT INTO public.games VALUES (167, 2018, 'Third Place', 971, 972, 2, 0);
INSERT INTO public.games VALUES (168, 2018, 'Semi-Final', 970, 972, 2, 1);
INSERT INTO public.games VALUES (169, 2018, 'Semi-Final', 969, 971, 1, 0);
INSERT INTO public.games VALUES (170, 2018, 'Quarter-Final', 970, 973, 3, 2);
INSERT INTO public.games VALUES (171, 2018, 'Quarter-Final', 972, 974, 2, 0);
INSERT INTO public.games VALUES (172, 2018, 'Quarter-Final', 971, 975, 2, 1);
INSERT INTO public.games VALUES (173, 2018, 'Quarter-Final', 969, 976, 2, 0);
INSERT INTO public.games VALUES (174, 2018, 'Eighth-Final', 972, 977, 2, 1);
INSERT INTO public.games VALUES (175, 2018, 'Eighth-Final', 974, 978, 1, 0);
INSERT INTO public.games VALUES (176, 2018, 'Eighth-Final', 971, 979, 3, 2);
INSERT INTO public.games VALUES (177, 2018, 'Eighth-Final', 975, 980, 2, 0);
INSERT INTO public.games VALUES (178, 2018, 'Eighth-Final', 970, 981, 2, 1);
INSERT INTO public.games VALUES (179, 2018, 'Eighth-Final', 973, 982, 2, 1);
INSERT INTO public.games VALUES (180, 2018, 'Eighth-Final', 976, 983, 2, 1);
INSERT INTO public.games VALUES (181, 2018, 'Eighth-Final', 969, 984, 4, 3);
INSERT INTO public.games VALUES (182, 2014, 'Final', 985, 984, 1, 0);
INSERT INTO public.games VALUES (183, 2014, 'Third Place', 986, 975, 3, 0);
INSERT INTO public.games VALUES (184, 2014, 'Semi-Final', 984, 986, 1, 0);
INSERT INTO public.games VALUES (185, 2014, 'Semi-Final', 985, 975, 7, 1);
INSERT INTO public.games VALUES (186, 2014, 'Quarter-Final', 986, 987, 1, 0);
INSERT INTO public.games VALUES (187, 2014, 'Quarter-Final', 984, 971, 1, 0);
INSERT INTO public.games VALUES (188, 2014, 'Quarter-Final', 975, 977, 2, 1);
INSERT INTO public.games VALUES (189, 2014, 'Quarter-Final', 985, 969, 1, 0);
INSERT INTO public.games VALUES (190, 2014, 'Eighth-Final', 975, 988, 2, 1);
INSERT INTO public.games VALUES (191, 2014, 'Eighth-Final', 977, 976, 2, 0);
INSERT INTO public.games VALUES (192, 2014, 'Eighth-Final', 969, 989, 2, 0);
INSERT INTO public.games VALUES (193, 2014, 'Eighth-Final', 985, 990, 2, 1);
INSERT INTO public.games VALUES (194, 2014, 'Eighth-Final', 986, 980, 2, 1);
INSERT INTO public.games VALUES (195, 2014, 'Eighth-Final', 987, 991, 2, 1);
INSERT INTO public.games VALUES (196, 2014, 'Eighth-Final', 984, 978, 1, 0);
INSERT INTO public.games VALUES (197, 2014, 'Eighth-Final', 971, 992, 2, 1);


--
-- Data for Name: teams; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.teams VALUES (969, 'France');
INSERT INTO public.teams VALUES (970, 'Croatia');
INSERT INTO public.teams VALUES (971, 'Belgium');
INSERT INTO public.teams VALUES (972, 'England');
INSERT INTO public.teams VALUES (973, 'Russia');
INSERT INTO public.teams VALUES (974, 'Sweden');
INSERT INTO public.teams VALUES (975, 'Brazil');
INSERT INTO public.teams VALUES (976, 'Uruguay');
INSERT INTO public.teams VALUES (977, 'Colombia');
INSERT INTO public.teams VALUES (978, 'Switzerland');
INSERT INTO public.teams VALUES (979, 'Japan');
INSERT INTO public.teams VALUES (980, 'Mexico');
INSERT INTO public.teams VALUES (981, 'Denmark');
INSERT INTO public.teams VALUES (982, 'Spain');
INSERT INTO public.teams VALUES (983, 'Portugal');
INSERT INTO public.teams VALUES (984, 'Argentina');
INSERT INTO public.teams VALUES (985, 'Germany');
INSERT INTO public.teams VALUES (986, 'Netherlands');
INSERT INTO public.teams VALUES (987, 'Costa Rica');
INSERT INTO public.teams VALUES (988, 'Chile');
INSERT INTO public.teams VALUES (989, 'Nigeria');
INSERT INTO public.teams VALUES (990, 'Algeria');
INSERT INTO public.teams VALUES (991, 'Greece');
INSERT INTO public.teams VALUES (992, 'United States');


--
-- Name: games_game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.games_game_id_seq', 197, true);


--
-- Name: teams_team_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.teams_team_id_seq', 992, true);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);


--
-- Name: teams teams_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);


--
-- Name: teams teams_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);


--
-- Name: games games_opponent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_opponent_id_fkey FOREIGN KEY (opponent_id) REFERENCES public.teams(team_id);


--
-- Name: games games_winner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_winner_id_fkey FOREIGN KEY (winner_id) REFERENCES public.teams(team_id);


--
-- PostgreSQL database dump complete
--

