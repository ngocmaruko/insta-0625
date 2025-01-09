# Instagram Clone

The Instagram Clone is a social media web application built with React and Chakra UI, designed to replicate key features of the popular Instagram platform. This app focuses on the frontend functionality, including user authentication, profile management, and feed display.

## Features

### Authentication
- **AuthPage**: Allows users to sign in to the app via a login form.

### User Profile
- **ProfilePage**: Displays a user's profile with their posts, profile header, and tabs.
  - **Profile Header**: Shows profile information (e.g., profile picture, bio).
  - **Profile Posts**: Renders all posts from the user in a grid format.
  - **Profile Tabs**: Displays different sections like posts, saved, and followers.

### Feed
- **FeedPosts**: Displays posts from followed users in a scrollable feed.
- **Suggested Users**: Recommends users to follow based on interests.

## Technology Stack

- **Frontend**: React, Chakra UI, React Router
- **Authentication**: Custom authentication forms for logging in.
- **UI Design**: Styled with Chakra UI components for responsiveness and accessibility.
- **Routing**: React Router for navigating between pages (Home, Auth, Profile).

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ngocmaruko/insta-0625.git
   ```

2. Navigate to the project directory:
   ```bash
   cd insta-0625
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Future Enhancements

- **Backend Integration**:
  - Implement user authentication and post management.
- **Post Creation**:
  - Add functionality to upload photos and add captions.
- **Real-Time Updates**:
  - Enable real-time updates for new posts and comments.
- **Follow/Unfollow**:
  - Implement user follow/unfollow functionality.
