CREATE TABLE load (
	id serial not null primary key,
    origin_values text null, --multiples valores
    origin_radius int null,
    destination_values text null, --multiples valores
    destination_radius int null,
    pickup_start timestamp null,
    pickup_end timestamp null,
    equipment_type varchar(255) null,
    load_number int null,
    advanced_display_preference varchar(255) null,
    advanced_pickup_start timestamp null,
    advanced_pickup_end timestamp null,
    advanced_pickup_start_time varchar(255) null,
    advanced_pickup_end_time varchar(255) null,
    advanced_delivery_start timestamp null,
    advanced_delivery_end timestamp null,
    advanced_delivery_start_time varchar(255) null,
    advanced_delivery_end_time varchar(255) null,
    advanced_equipment_max_length float null,
    advanced_equipment_max_weigth float null,
    advanced_attributes text null --multiples valores
);
