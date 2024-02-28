#!/bin/bash

# Log into PostgreSQL and execute the following commands
psql <<EOF
-- Create the database with the owner
CREATE DATABASE eventhub_db OWNER gitpod;

-- Connect to the newly created database
\c eventhub_db

-- Create the events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

EOF
