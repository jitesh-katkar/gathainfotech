# Gathainfotech Training Website

A full-stack Java training website for gathainfotech.com built with React, Tailwind CSS, and Spring Boot.

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **React Frontend**: Single-page application with React Router
- **Spring Boot Backend**: RESTful APIs with JPA and MySQL
- **Course Management**: Comprehensive course details and syllabus
- **Contact System**: Contact form with backend processing
- **Responsive Design**: Mobile-first approach

## Pages

- **Home**: Hero section, features, featured courses, statistics
- **About**: Company information, team, mission, values
- **Syllabus**: Detailed course modules and learning outcomes
- **Contact**: Contact form and company information
- **Course Details**: Individual course pages with comprehensive information

## Technology Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Lucide React (Icons)
- Responsive Design

### Backend
- Spring Boot 3.2.0
- Spring Data JPA
- Spring Security
- MySQL Database
- JWT Authentication
- Maven

## Prerequisites

- Node.js (v16 or higher)
- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd web
```

### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The frontend will be available at `http://localhost:3000`

### 3. Backend Setup

#### Database Configuration

1. Install and start MySQL
2. Create a database (optional - will be created automatically)
3. Update database credentials in `backend/src/main/resources/application.properties`

#### Backend Installation

```bash
cd backend

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The backend API will be available at `http://localhost:8080/api`

### 4. Environment Configuration

#### Frontend Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8080/api
```

#### Backend Configuration

Update `backend/src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/gathainfotech_training?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password

# JWT Configuration
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
```

## Project Structure

```
web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Syllabus.js
│   │   ├── Contact.js
│   │   └── CourseDetails.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js

backend/
├── src/main/java/com/gathainfotech/training/
│   ├── controller/
│   │   ├── CourseController.java
│   │   └── ContactController.java
│   ├── service/
│   │   ├── CourseService.java
│   │   └── ContactService.java
│   ├── repository/
│   │   ├── CourseRepository.java
│   │   └── ContactRepository.java
│   ├── model/
│   │   ├── Course.java
│   │   └── Contact.java
│   ├── dto/
│   │   ├── CourseDTO.java
│   │   └── ContactDTO.java
│   └── TrainingWebsiteApplication.java
├── src/main/resources/
│   └── application.properties
└── pom.xml
```

## API Endpoints

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/{courseId}` - Get course by ID
- `GET /api/courses/top` - Get top courses
- `GET /api/courses/search?keyword={keyword}` - Search courses
- `POST /api/courses` - Create new course
- `PUT /api/courses/{courseId}` - Update course
- `DELETE /api/courses/{courseId}` - Delete course

### Contacts
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/unread` - Get unread contacts
- `GET /api/contacts/read` - Get read contacts
- `GET /api/contacts/{id}` - Get contact by ID
- `PUT /api/contacts/{id}/read` - Mark contact as read
- `DELETE /api/contacts/{id}` - Delete contact
- `GET /api/contacts/unread/count` - Get unread count

## Available Courses

1. **Spring Boot Development** (`/course/spring-boot`)
   - Duration: 6 weeks
   - Level: Intermediate
   - Price: ₹25,000

2. **AWS Cloud Computing** (`/course/aws`)
   - Duration: 8 weeks
   - Level: Advanced
   - Price: ₹35,000

3. **Apache Kafka & Microservices** (`/course/kafka`)
   - Duration: 4 weeks
   - Level: Advanced
   - Price: ₹20,000

## Development

### Frontend Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Backend Development

```bash
# Run with Maven
mvn spring-boot:run

# Build JAR file
mvn clean package

# Run JAR file
java -jar target/training-website-0.0.1-SNAPSHOT.jar
```

## Deployment

### Frontend Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your web server

### Backend Deployment

1. Build the JAR file:
   ```bash
   mvn clean package
   ```

2. Deploy the JAR file to your server:
   ```bash
   java -jar target/training-website-0.0.1-SNAPSHOT.jar
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@gathainfotech.com or create an issue in the repository.

---

**Gathainfotech Training Website** - Empowering developers with comprehensive Java Full Stack training. 