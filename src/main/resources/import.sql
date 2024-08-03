# CREATE DATABASE IF NOT EXISTS gbf;
-- Insert into gbf.question
# TRUNCATE TABLE gbf.gym_review;
# TRUNCATE TABLE gbf.gym_photo;
# TRUNCATE TABLE gbf.gym;
# TRUNCATE TABLE gbf.question;
# TRUNCATE TABLE gbf.payment;
# TRUNCATE TABLE gbf.subscription;
# TRUNCATE TABLE gbf.user_photo;
# TRUNCATE TABLE gbf.message;
# TRUNCATE TABLE gbf.buddyship;
# TRUNCATE TABLE gbf.user_preference;
# TRUNCATE TABLE gbf.choice;
# TRUNCATE TABLE gbf.question;
# TRUNCATE TABLE gbf.user_profile;
# TRUNCATE TABLE gbf.user_account;



INSERT INTO gbf.question (id, question)
VALUES (1, 'What is your body type?'),
       (2, 'Do you smoke?'),
       (3, 'Do you drink?'),
       (4, 'What is your diet?'),
       (5, 'How often do you work out?'),
       (6, 'What is your hair color?'),
       (7, 'What is your eye color?'),
       (8, 'What is your zodiac sign?'),
       (9, 'What is your best feature?'),
       (10, 'What is your ethnicity?'),
       (11, 'What is your religion?'),
       (12, 'What is your education level?'),
       (13, 'What is your employment status?'),
       (14, 'Do you have kids?'),
       (15, 'What is your marital status?')
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.choice
INSERT INTO gbf.choice (id, answer, question_id)
VALUES (1, 'Athletic', 1),
       (2, 'Average', 1),
       (3, 'Slim', 1),
       (4, 'Curvy', 1),
       (5, 'Yes', 2),
       (6, 'No', 2),
       (7, 'Yes', 3),
       (8, 'No', 3),
       (9, 'Vegetarian', 4),
       (10, 'Vegan', 4),
       (11, 'Paleo', 4),
       (12, 'Keto', 4),
       (13, 'Everyday', 5),
       (14, '3-4 times a week', 5),
       (15, 'Once a week', 5),
       (16, 'Rarely', 5),
       (17, 'Black', 6),
       (18, 'Brown', 6),
       (19, 'Blonde', 6),
       (20, 'Red', 6),
       (21, 'Blue', 7),
       (22, 'Brown', 7),
       (23, 'Green', 7),
       (24, 'Hazel', 7),
       (25, 'Aries', 8),
       (26, 'Taurus', 8),
       (27, 'Gemini', 8),
       (28, 'Cancer', 8),
       (29, 'Leo', 8),
       (30, 'Virgo', 8),
       (31, 'Libra', 8),
       (32, 'Scorpio', 8),
       (33, 'Sagittarius', 8),
       (34, 'Capricorn', 8),
       (35, 'Aquarius', 8),
       (36, 'Pisces', 8),
       (37, 'Smile', 9),
       (38, 'Eyes', 9),
       (39, 'Hair', 9),
       (40, 'Body', 9),
       (41, 'Caucasian', 10),
       (42, 'African American', 10),
       (43, 'Hispanic', 10),
       (44, 'Asian', 10),
       (45, 'Other', 10),
       (46, 'Christianity', 11),
       (47, 'Islam', 11),
       (48, 'Hinduism', 11),
       (49, 'Buddhism', 11),
       (50, 'Atheism', 11),
       (51, 'Other', 11),
       (52, 'High School', 12),
       (53, 'Bachelor\'s Degree', 12),
       (54, 'Master\'s Degree', 12),
       (55, 'PhD', 12),
       (56, 'Employed', 13),
       (57, 'Unemployed', 13),
       (58, 'Self-employed', 13),
       (59, 'Student', 13),
       (60, 'Retired', 13),
       (61, 'Yes', 14),
       (62, 'No', 14),
       (63, 'Single', 15),
       (64, 'Married', 15),
       (65, 'Divorced', 15),
       (66, 'Widowed', 15)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.user_account


INSERT INTO gbf.user_account (id, created_at, email, last_login, password, role, updated_at, suspended)
VALUES
    (1, NOW(), 'john.doe@example.com', NOW(), 'password1', 1, NOW(), FALSE),
    (2, NOW(), 'jane.smith@example.com', NOW(), 'password2', 1, NOW(), TRUE),
    (3, NOW(), 'alice.johnson@example.com', NOW(), 'password3', 1, NOW(), FALSE),
    (4, NOW(), 'bob.brown@example.com', NOW(), 'password4', 1, NOW(), FALSE),
    (5, NOW(), 'carol.wilson@example.com', NOW(), 'password5', 1, NOW(), FALSE),
    (6, NOW(), 'dave.miller@example.com', NOW(), 'password6', 1, NOW(), FALSE),
    (7, NOW(), 'eve.davis@example.com', NOW(), 'password7', 1, NOW(), FALSE),
    (8, NOW(), 'frank.moore@example.com', NOW(), 'password8', 1, NOW(), FALSE),
    (9, NOW(), 'grace.taylor@example.com', NOW(), 'password9', 1, NOW(), FALSE),
    (10, NOW(), 'hank.anderson@example.com', NOW(), 'password10', 1, NOW(), FALSE),
    (11, NOW(), 'isabella.smith@example.com', NOW(), 'password11', 1, NOW(), FALSE),
    (12, NOW(), 'jack.jones@example.com', NOW(), 'password12', 1, NOW(), FALSE),
    (13, NOW(), 'karen.martin@example.com', NOW(), 'password13', 1, NOW(), FALSE),
    (14, NOW(), 'leo.lee@example.com', NOW(), 'password14', 1, NOW(), FALSE),
    (15, NOW(), 'mona.kim@example.com', NOW(), 'password15', 1, NOW(), FALSE),
    (16, NOW(), 'nina.hernandez@example.com', NOW(), 'password16', 1, NOW(), FALSE),
    (17, NOW(), 'oliver.thompson@example.com', NOW(), 'password17', 1, NOW(), FALSE),
    (18, NOW(), 'peter.white@example.com', NOW(), 'password18', 1, NOW(), FALSE),
    (19, NOW(), 'quinn.moore@example.com', NOW(), 'password19', 1, NOW(), FALSE),
    (20, NOW(), 'rachel.clark@example.com', NOW(), 'password20', 1, NOW(), FALSE),
    (21, NOW(), 'admin1@example.com', NOW(), 'adminpassword1', 0, NOW(), FALSE),
    (22, NOW(), 'admin2@example.com', NOW(), 'adminpassword2', 0, NOW(), FALSE),
    (23, NOW(), 'admin3@example.com', NOW(), 'adminpassword3', 0, NOW(), FALSE)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.user_profile
INSERT INTO gbf.user_profile (user_account_id, address, bio, city, country, created_at, dob, first_name, gender,
                              is_active, last_name, post_code, province, profile_picture_url, updated_at)
VALUES (1, '123 Granville St', 'Fitness enthusiast with a passion for running and hiking.', 'Vancouver', 'Canada',
        NOW(), '1990-01-01', 'John', 0, 1, 'Doe', 'V6Z 1N9', 'BC', '/profile_pictures/1.jpg', NOW()),
       (2, '456 Robson St', 'Avid gym-goer and amateur bodybuilder.', 'Vancouver', 'Canada', NOW(), '1992-02-02',
        'Jane', 1, 1, 'Smith', 'V6E 1C7', 'BC', '/profile_pictures/2.jpg', NOW()),
       (3, '789 Broadway St', 'Yoga instructor and wellness coach.', 'Burnaby', 'Canada', NOW(), '1985-03-03', 'Alice',
        1, 1, 'Johnson', 'V5G 1M7', 'BC', '/profile_pictures/3.jpg', NOW()),
       (4, '101 Kingsway', 'Professional athlete specializing in track and field.', 'Burnaby', 'Canada', NOW(),
        '1988-04-04', 'Bob', 0, 1, 'Brown', 'V5H 2E7', 'BC', '/profile_pictures/4.jpg', NOW()),
       (5, '202 Marine Dr', 'Cycling enthusiast and marathon runner.', 'West Vancouver', 'Canada', NOW(), '1991-05-05',
        'Carol', 1, 1, 'Wilson', 'V7T 1A1', 'BC', '/profile_pictures/5.jpg', NOW()),
       (6, '303 Pender St', 'Personal trainer with a focus on strength training.', 'North Vancouver', 'Canada', NOW(),
        '1993-06-06', 'Dave', 0, 1, 'Miller', 'V7L 1A1', 'BC', '/profile_pictures/6.jpg', NOW()),
       (7, '404 Georgia St', 'Health and nutrition blogger.', 'Vancouver', 'Canada', NOW(), '1989-07-07', 'Eve', 2, 1,
        'Davis', 'V6B 1Z4', 'BC', '/profile_pictures/7.jpg', NOW()),
       (8, '505 Burrard St', 'Crossfit competitor and coach.', 'Vancouver', 'Canada', NOW(), '1987-08-08', 'Frank', 0,
        1, 'Moore', 'V6C 3L6', 'BC', '/profile_pictures/8.jpg', NOW()),
       (9, '606 Hastings St', 'Swimmer and triathlete.', 'Vancouver', 'Canada', NOW(), '1990-09-09', 'Grace', 1, 1,
        'Taylor', 'V6C 1V5', 'BC', '/profile_pictures/9.jpg', NOW()),
       (10, '707 Seymour St', 'Passionate about rock climbing and outdoor adventures.', 'Vancouver', 'Canada', NOW(),
        '1986-10-10', 'Hank', 0, 1, 'Anderson', 'V6B 3K9', 'BC', '/profile_pictures/10.jpg', NOW())
ON DUPLICATE KEY UPDATE user_account_id = user_account_id;



-- Insert into gbf.user_preference
INSERT INTO gbf.user_preference (id, choice_id, question_id, user_id)
VALUES (1, 1, 1, 1),
       (2, 5, 2, 1),
       (3, 7, 3, 1),
       (4, 9, 4, 1),
       (5, 13, 5, 1),
       (6, 17, 6, 1),
       (7, 21, 7, 1),
       (8, 25, 8, 1),
       (9, 37, 9, 1),
       (10, 41, 10, 1),
       (11, 46, 11, 1),
       (12, 52, 12, 1),
       (13, 56, 13, 1),
       (14, 61, 14, 1),
       (15, 63, 15, 1),
       (16, 2, 1, 2),
       (17, 6, 2, 2),
       (18, 8, 3, 2),
       (19, 10, 4, 2),
       (20, 14, 5, 2),
       (21, 18, 6, 2),
       (22, 22, 7, 2),
       (23, 26, 8, 2),
       (24, 38, 9, 2),
       (25, 42, 10, 2),
       (26, 47, 11, 2),
       (27, 53, 12, 2),
       (28, 57, 13, 2),
       (29, 62, 14, 2),
       (30, 64, 15, 2),
       (31, 3, 1, 3),
       (32, 5, 2, 3),
       (33, 7, 3, 3),
       (34, 12, 4, 3),
       (35, 15, 5, 3),
       (36, 20, 6, 3),
       (37, 23, 7, 3),
       (38, 30, 8, 3),
       (39, 39, 9, 3),
       (40, 45, 10, 3),
       (41, 50, 11, 3),
       (42, 54, 12, 3),
       (43, 58, 13, 3),
       (44, 66, 14, 3),
       (45, 65, 15, 3),
       (46, 4, 1, 4),
       (47, 6, 2, 4),
       (48, 7, 3, 4),
       (49, 11, 4, 4),
       (50, 13, 5, 4),
       (51, 19, 6, 4),
       (52, 24, 7, 4),
       (53, 32, 8, 4),
       (54, 40, 9, 4),
       (55, 42, 10, 4),
       (56, 49, 11, 4),
       (57, 55, 12, 4),
       (58, 60, 13, 4),
       (59, 61, 14, 4),
       (60, 64, 15, 4),
       (61, 1, 1, 5),
       (62, 6, 2, 5),
       (63, 8, 3, 5),
       (64, 9, 4, 5),
       (65, 14, 5, 5),
       (66, 18, 6, 5),
       (67, 22, 7, 5),
       (68, 29, 8, 5),
       (69, 37, 9, 5),
       (70, 41, 10, 5),
       (71, 46, 11, 5),
       (72, 52, 12, 5),
       (73, 56, 13, 5),
       (74, 61, 14, 5),
       (75, 63, 15, 5),
       (76, 3, 1, 6),
       (77, 6, 2, 6),
       (78, 8, 3, 6),
       (79, 12, 4, 6),
       (80, 15, 5, 6),
       (81, 17, 6, 6),
       (82, 21, 7, 6),
       (83, 28, 8, 6),
       (84, 38, 9, 6),
       (85, 45, 10, 6),
       (86, 50, 11, 6),
       (87, 54, 12, 6),
       (88, 56, 13, 6),
       (89, 65, 14, 6),
       (90, 63, 15, 6),
       (91, 2, 1, 7),
       (92, 5, 2, 7),
       (93, 7, 3, 7),
       (94, 10, 4, 7),
       (95, 14, 5, 7),
       (96, 19, 6, 7),
       (97, 23, 7, 7),
       (98, 33, 8, 7),
       (99, 39, 9, 7),
       (100, 42, 10, 7),
       (101, 48, 11, 7),
       (102, 53, 12, 7),
       (103, 57, 13, 7),
       (104, 66, 14, 7),
       (105, 64, 15, 7),
       (106, 1, 1, 8),
       (107, 5, 2, 8),
       (108, 7, 3, 8),
       (109, 11, 4, 8),
       (110, 13, 5, 8),
       (111, 18, 6, 8),
       (112, 22, 7, 8),
       (113, 29, 8, 8),
       (114, 37, 9, 8),
       (115, 41, 10, 8),
       (116, 46, 11, 8),
       (117, 52, 12, 8),
       (118, 58, 13, 8),
       (119, 61, 14, 8),
       (120, 63, 15, 8),
       (121, 3, 1, 9),
       (122, 6, 2, 9),
       (123, 8, 3, 9),
       (124, 12, 4, 9),
       (125, 15, 5, 9),
       (126, 20, 6, 9),
       (127, 21, 7, 9),
       (128, 30, 8, 9),
       (129, 39, 9, 9),
       (130, 42, 10, 9),
       (131, 49, 11, 9),
       (132, 55, 12, 9),
       (133, 57, 13, 9),
       (134, 66, 14, 9),
       (135, 64, 15, 9),
       (136, 1, 1, 10),
       (137, 5, 2, 10),
       (138, 7, 3, 10),
       (139, 11, 4, 10),
       (140, 13, 5, 10),
       (141, 17, 6, 10),
       (142, 21, 7, 10),
       (143, 28, 8, 10),
       (144, 37, 9, 10),
       (145, 41, 10, 10),
       (146, 46, 11, 10),
       (147, 52, 12, 10),
       (148, 56, 13, 10),
       (149, 61, 14, 10),
       (150, 63, 15, 10)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.gym
INSERT INTO gbf.gym (id, address, city, country, created_at, description, name, phone, post_code, province, updated_at, email, website_url)
VALUES
    (1, '1234 Main St', 'Vancouver', 'Canada', NOW(), 'Fitness First offers state-of-the-art equipment, group classes, and personal training to help you achieve your fitness goals efficiently and effectively.', 'Fitness First', '604-123-4567', 'V5K 0A1', 'BC', NOW(), 'laura@fitnessfirst.com', 'https://fitnessfirst.com'),
    (2, '2345 Elm St', 'Surrey', 'Canada', NOW(), 'Muscle Mania is your ultimate destination for strength training, with top-notch facilities, expert trainers, and a motivating environment to push your limits.', 'Muscle Mania', '604-234-5678', 'V3T 1X1', 'BC', NOW(), 'katy@musclemania.com', 'https://musclemania.com'),
    (3, '3456 Oak St', 'Richmond', 'Canada', NOW(), 'Strength Central provides a range of weightlifting equipment, cardio machines, and professional guidance to enhance your fitness journey in a welcoming space.', 'Strength Central', '604-345-6789', 'V6Y 1Z1', 'BC', NOW(), 'jason@strengthcentral.com', 'https://strengthcentral.com'),
    (4, '4567 Pine St', 'Burnaby', 'Canada', NOW(), 'Power House combines cutting-edge exercise equipment with expert instruction to create an energetic environment for achieving your health and fitness goals.', 'Power House', '604-456-7890', 'V5G 1M1', 'BC', NOW(), 'tom@powerhouse.com', 'https://powerhouse.com'),
    (5, '5678 Maple St', 'Coquitlam', 'Canada', NOW(), 'Endurance Gym focuses on endurance training with a variety of cardio machines, fitness classes, and personalized workout plans to maximize your stamina.', 'Endurance Gym', '604-567-8901', 'V3J 1E1', 'BC', NOW(), 'pat@endurancegym.com', 'https://endurancegym.com'),
    (6, '6789 Birch St', 'Langley', 'Canada', NOW(), 'Stamina Station is dedicated to helping you build endurance with our extensive range of equipment, group fitness classes, and supportive training staff.', 'Stamina Station', '604-678-9012', 'V2Y 1L1', 'BC', NOW(), 'lucy@staminastation.com', 'https://staminastation.com'),
    (7, '7890 Cedar St', 'Abbotsford', 'Canada', NOW(), 'Flex Fitness features versatile workout areas, including functional training zones and cardio stations, designed to offer a comprehensive fitness experience for all levels.', 'Flex Fitness', '604-789-0123', 'V2S 1P1', 'BC', NOW(), 'mark@flexfitness.com', 'https://flexfitness.com'),
    (8, '8901 Fir St', 'Delta', 'Canada', NOW(), 'Cardio Corner specializes in cardiovascular fitness with a wide array of treadmills, bikes, and rowing machines, plus dynamic classes to keep you motivated.', 'Cardio Corner', '604-890-1234', 'V4K 1A1', 'BC', NOW(), 'dan@cardiocorner.com', 'https://cardiocorner.com'),
    (9, '9012 Spruce St', 'Port Moody', 'Canada', NOW(), 'Body Builders offers a high-energy environment with advanced equipment, personal coaching, and a variety of fitness classes tailored to your strength-building needs.', 'Body Builders', '604-901-2345', 'V3H 1Z1', 'BC', NOW(), 'bob@bodybuilders.com', 'https://bodybuilders.com'),
    (10, '10123 Willow St', 'New Westminster', 'Canada', NOW(), 'Gym Hub provides a complete fitness experience with a focus on community, offering modern equipment, engaging group classes, and certified trainers to support your goals.', 'Gym Hub', '604-012-3456', 'V3L 1M1', 'BC', NOW(), 'jinx@gymhub.com', 'https://gymhub.com')
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.buddyship
INSERT INTO gbf.buddyship (id, created_at, status, updated_at, buddy_id, user_id)
VALUES (1, NOW(), 2, NOW(), 2, 1),
       (2, NOW(), 2, NOW(), 3, 1),
       (3, NOW(), 1, NOW(), 4, 1),
       (4, NOW(), 2, NOW(), 5, 2),
       (5, NOW(), 2, NOW(), 6, 2),
       (6, NOW(), 1, NOW(), 7, 2),
       (7, NOW(), 2, NOW(), 8, 3),
       (8, NOW(), 2, NOW(), 9, 3),
       (9, NOW(), 1, NOW(), 10, 3),
       (10, NOW(), 2, NOW(), 1, 4)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.gym_photo
INSERT INTO gbf.gym_photo (id, url, gym_id)
VALUES (1, '/gym_photos/1.jpg', 1),
       (2, '/gym_photos/2.jpg', 1),
       (3, '/gym_photos/3.jpg', 2),
       (4, '/gym_photos/4.jpg', 2),
       (5, '/gym_photos/5.jpg', 3),
       (6, '/gym_photos/6.jpg', 3),
       (7, '/gym_photos/7.jpg', 4),
       (8, '/gym_photos/8.jpg', 4),
       (9, '/gym_photos/9.jpg', 5),
       (10, '/gym_photos/10.jpg', 5)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.gym_review
INSERT INTO gbf.gym_review (id, created_at, rating, review, gym_id, user_id)
VALUES (1, NOW(), 4, 'Great gym with excellent facilities.', 1, 1),
       (2, NOW(), 3, 'Good equipment but a bit crowded.', 1, 2),
       (3, NOW(), 2, 'Average gym, needs better maintenance.', 2, 3),
       (4, NOW(), 4, 'Amazing trainers and staff.', 2, 4),
       (5, NOW(), 1, 'Not very clean and old equipment.', 3, 5),
       (6, NOW(), 3, 'Decent place to work out.', 3, 6),
       (7, NOW(), 4, 'Best gym in the area.', 4, 7),
       (8, NOW(), 3, 'Good value for the price.', 4, 8),
       (9, NOW(), 2, 'Okay experience, nothing special.', 5, 9),
       (10, NOW(), 4, 'Excellent gym with great community.', 5, 10)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.message
INSERT INTO gbf.message (id, content, receiver_id, sender_id, time_stamp)
VALUES (1, 'Hey, want to work out together tomorrow?', 2, 1, NOW()),
       (2, 'Sure, what time?', 1, 2, NOW()),
       (3, 'Let\'s go at 6 PM.', 2, 1, NOW()),
       (4, 'Hi, are you coming to the gym today?', 3, 4, NOW()),
       (5, 'Yes, I\'ll be there in an hour.', 4, 3, NOW()),
       (6, 'Great, see you then!', 3, 4, NOW()),
       (7, 'Can you help me with my workout plan?', 5, 6, NOW()),
       (8, 'Of course! Let\'s meet up tomorrow.', 6, 5, NOW()),
       (9, 'Hey, long time no see!', 7, 8, NOW()),
       (10, 'Yeah, we should catch up soon.', 8, 7, NOW())
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.subscription_plan
INSERT INTO gbf.subscription_plan (id, created_at, name, price_per_month, updated_at)
VALUES (1, NOW(), 'Basic Plan', 29.99, NOW()),
       (2, NOW(), 'Standard Plan', 39.99, NOW()),
       (3, NOW(), 'Premium Plan', 49.99, NOW())
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.subscription
INSERT INTO gbf.subscription (id, start_at, end_at, is_active, created_at, updated_at, user_id, plan_id)
VALUES (1, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 1, 1),
       (2, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 2, 1),
       (3, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 3, 1),
       (4, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 4, 1),
       (5, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 5, 1),
       (6, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 6, 1),
       (7, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 7, 1),
       (8, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 8, 1),
       (9, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 9, 1),
       (10, NOW(), NOW() + INTERVAL 1 YEAR, 1, NOW(), NOW(), 10, 1)
ON DUPLICATE KEY UPDATE id = id;

-- Insert into gbf.payment
INSERT INTO gbf.payment (id, amount, created_at, subscription_id, user_id)
VALUES (1, 29.99, NOW(), 1, 1),
       (2, 29.99, NOW(), 2, 2),
       (3, 29.99, NOW(), 3, 3),
       (4, 29.99, NOW(), 4, 4),
       (5, 29.99, NOW(), 5, 5),
       (6, 29.99, NOW(), 6, 6),
       (7, 29.99, NOW(), 7, 7),
       (8, 29.99, NOW(), 8, 8),
       (9, 29.99, NOW(), 9, 9),
       (10, 29.99, NOW(), 10, 10)
ON DUPLICATE KEY UPDATE id = id;


-- Insert into gbf.user_photo
INSERT INTO gbf.user_photo (id, created_at, is_deleted, updated_at, url, user_id)
VALUES (1, NOW(), 0, NOW(), 'https://example.com/user1_photo1.jpg', 1),
       (2, NOW(), 0, NOW(), 'https://example.com/user1_photo2.jpg', 1),
       (3, NOW(), 0, NOW(), 'https://example.com/user2_photo1.jpg', 2),
       (4, NOW(), 0, NOW(), 'https://example.com/user2_photo2.jpg', 2),
       (5, NOW(), 0, NOW(), 'https://example.com/user3_photo1.jpg', 3),
       (6, NOW(), 0, NOW(), 'https://example.com/user3_photo2.jpg', 3),
       (7, NOW(), 0, NOW(), 'https://example.com/user4_photo1.jpg', 4),
       (8, NOW(), 0, NOW(), 'https://example.com/user4_photo2.jpg', 4),
       (9, NOW(), 0, NOW(), 'https://example.com/user5_photo1.jpg', 5),
       (10, NOW(), 0, NOW(), 'https://example.com/user5_photo2.jpg', 5)
ON DUPLICATE KEY UPDATE id = id;
