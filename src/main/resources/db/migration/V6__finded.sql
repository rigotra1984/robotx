CREATE TABLE finded (
    id varchar(100) not null primary key,
    created timestamp not null DEFAULT now(),
    load_id int not null references load(id),
    origin varchar(255) not null,
    total_price float null,
    mi_price float null
);
create index finded_load_id on finded(load_id);

ALTER TABLE load ADD COLUMN min_mi_price float null;