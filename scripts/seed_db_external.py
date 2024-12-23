import os
import csv
import mysql.connector

cnx = mysql.connector.connect(
        host=os.getenv("HOST", "127.0.0.1"),
        port=3306,
        user="root",
        password="dev",
        database="laravel"
        )

cur = cnx.cursor()

sports: dict[str, int] = {}

def normalize(s: str) -> str:
    return s.lower().replace("'", "''")

def generate_club_sql_row(name, hi, ai, url):
    return f"('{name}', {hi}, {ai}, '{url}')"

def generate_adress_row(adres, nr, postcode, location, coords):
    return f"('{normalize(adres)}', '{nr}', '{postcode}', '{normalize(coords)}', '{normalize(coords)}')"

def generate_sport_row(name, hi, desc):
    return f"'{normalize(name)}', {hi}, '{desc}'"

def insert_sport(name) -> int:
    name = normalize(name)

    id = sports.get(name, None)
    if id is not None:
        return id

    sql = f"INSERT INTO `sports` (name, description) VALUES ('{name}', '');"
    cur.execute(sql)
    id = cur.lastrowid
    sports[name] = id
    return id

def insert_adress(adres, nr, postcode, loc, c) -> int:
    sql = f"INSERT INTO `addresses` (address, nr, postcode, location, coords) VALUES {generate_adress_row(adres, nr, postcode, loc, c)}"
    print(sql)
    cur.execute(sql)
    return cur.lastrowid

def insert_club(name, adressId, url):
    sql = f"INSERT INTO `sport_clubs` (name, address_id, website_url) VALUES ('{normalize(name)}', {adressId}, '{url}')"
    print(sql)
    cur.execute(sql)
    return cur.lastrowid

def link_club(clubId, sportId):
    sql = f"INSERT INTO sport_club_sports (sport_club_id, sport_id) VALUES ({clubId}, {sportId})";
    cur.execute(sql)

def first_csv():
    f = open("Verenigingen-Table 1.csv", 'r')

    reader = csv.reader(f, delimiter=';')



    for i, row in enumerate(reader):
        if i == 0:
            continue


        if row[1] == '':
            continue

        print(row)
        sportId = insert_sport(row[8])
        adressId = insert_adress(row[1], row[2], row[3], row[4], row[11])
        clubId = insert_club(row[0], adressId, row[5])
        link_club(clubId, sportId)

def tags():
    f = open("tags.sql", "r")
    sql = f.read()
    cur.execute(sql, multi=True)


first_csv()
tags()

cnx.commit()
