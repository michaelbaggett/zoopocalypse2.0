DROP DATABASE IF EXISTS zoopocalypse;
CREATE DATABASE zoopocalypse;
USE zoopocalypse;

CREATE TABLE animals
(
	id INT
	AUTO_INCREMENT,
	animal_name VARCHAR
	(10),
	image VARCHAR
	(200),
	PRIMARY KEY
	(id)
);

	INSERT INTO animals
		(animal_name, image)
	VALUES
		("Bat", "https://pngtree.com/freepng/cartoon-bats-material_3046789.html"),
		("Fox", "https://pngio.com/images/png-49851.html"),
		("Lion", "hhttps://www.nicepng.com/png/detail/5-58052_cartoon-lion-png-graphic-freeuse-download-cartoon-lion.png"),
		("Bear", "https://www.pngfly.com/png-xqnd4f/"),
		("Tiger", "https://www.kisspng.com/png-clip-art-jungle-image-cartoon-drawing-6959686/"),
		("Rhino", "https://www.kisspng.com/png-cartoon-rhinoceros-illustration-cartoon-rhino-75190/"),
		("Walrus", "https://www.123rf.com/photo_96156004_stock-vector-cute-cartoon-walrus-arctic-animal-vector-illustration-isolated-on-white-background-.html?vti=mid8cmwpa7c7tss711-1-2"),
		("Alpaca", "https://www.kisspng.com/png-llama-alpaca-drawing-cartoon-clip-art-alpaca-1075394/download-png.html#"),
		("Penguin", "https://banner2.kisspng.com/20180130/cxe/kisspng-the-penguin-in-the-snow-cartoon-clip-art-penguin-swing-5a702c5841fbb3.6816422715173008242703.jpg"),
		("Giraffe", "https://www.kisspng.com/png-giraffe-cartoon-illustration-giraffe-392474/download-png.html#"),
		("Elephant", "https://icon2.kisspng.com/20180226/fjq/kisspng-cartoon-elephant-illustration-animals-elephants-5a94d1d9efa228.4502303715197024899815.jpg");

	CREATE TABLE Users
	(
		id int(11) NOT NULL
		AUTO_INCREMENT,
  username varchar
		(255) NOT NULL,
	password varchar
		(255) NOT NULL,
  phone VARCHAR
		(15) NOT NULL,
  age int
		(5) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY
		(id),
  UNIQUE KEY username
		(username),

	antCompleted Boolean,
	bat_completed Boolean,
	fox_completed Boolean,
	yak_completed Boolean,
	owl_completed Boolean,
	toad_completed Boolean,
	crab_completed Boolean,
	lion_completed Boolean,
	bear_completed Boolean,
	bull_completed Boolean,
	panda_completed Boolean,
	llama_completed Boolean,
	rhino_completed Boolean,
	sloth_completed Boolean,
	snake_completed Boolean,
	monkey_completed Boolean,
	jaguar_completed Boolean,
	toucan_completed Boolean,
	walrus_completed Boolean,
	beaver_completed Boolean,
	penguin_completed Boolean,
	gorilla_completed Boolean,
	cheetah_completed Boolean,
	giraffe_completed Boolean,
	elephant_completed Boolean
)
