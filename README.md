# Mobile Development Course Practice Suite (INGE 4 • Semester 7)

A modular, production-ready React Native application built with **Expo Go** and **Expo Router**. This project unifies and organizes all coursework tutorials and assignments into clearly separated, well-documented modules.

---

## 📱 How to Run the App in Expo Go

1. **Install dependencies** (if pulling fresh):
   ```bash
   npm install
   ```

2. **Start the Expo development server**:
   ```bash
   npm start
   # or
   npx expo start
   ```

3. **Open on your device**:
   - **Android**: Open the **Expo Go** app on your phone and scan the QR code printed in the terminal.
   - **iOS**: Open the native Camera app, scan the QR code, and open it in **Expo Go**.
   - **Web Preview**: Press `w` in the terminal to view in your desktop web browser.
   - **Emulators**: Press `a` for Android Emulator or `i` for iOS Simulator.

---

## 🗂️ Project Organization & Curriculum Mapping

Each tutorial, exercise, and assignment requirement has a dedicated, clearly named home in the codebase:

```text
src/
├── app/                                 # File-based routing (Expo Router)
│   ├── _layout.tsx                      # Left Menu (Drawer) Navigator
│   ├── index.tsx                        # Root entry redirect to /home
│   ├── (tabs)/                          # Tabbed Navigation under "Home"
│   │   ├── _layout.tsx                  # <Tabs> configuring: Home, People, Fruits
│   │   ├── index.tsx                    # Default tab redirect
│   │   ├── home/index.tsx               # TD 1: UI Components & Layouts (Blocks 1, 2, 3, 4)
│   │   ├── people/index.tsx             # TD 2: Dynamic People & ActionSheet (Indigo header)
│   │   └── fruits/index.tsx             # Assignment: Fruits Catalog (Emerald header)
│   ├── preferences/index.tsx            # Left Menu View: Preferences
│   ├── profile/index.tsx                # Left Menu View: My Profile (Student Dossier)
│   ├── about/index.tsx                  # Left Menu View: About (Coursework Overview)
│   └── tasks/index.tsx                  # SQLite Lab: Task Tracker App (expo-sqlite)
│
├── components/                          # Modular UI Components
│   ├── common/
│   │   ├── Toolbar.tsx                  # Header: Left menu button + 'ellipsis-vertical-outline'
│   │   ├── Footer.tsx                   # Footer: 'Copyright 2025 [Name]'
│   │   └── ActionSheetModal.tsx         # Action Sheet: Call, Info, Share, Delete, Cancel
│   ├── td1/
│   │   ├── VehicleList.tsx              # Block 1: 5 vehicles (Brand, Model, HP, Photo)
│   │   ├── PlacesList.tsx               # Block 2 & 3: Colored places + Dialog (Cancel, Go there, Later)
│   │   └── TravelCard.tsx               # Block 4: Travel map with image, desc, Visit & See buttons
│   ├── td2/
│   │   └── PeopleList.tsx               # Dynamic list of people with action sheet trigger
│   ├── fruits/
│   │   └── FruitsList.tsx               # Fruits catalog with nutritional facts & botanical details
│   └── tasks/
│       ├── TaskCounter.tsx              # SQLite Component 1: Task counter & stats breakdown
│       ├── TaskInput.tsx                # SQLite Task text input + Add button
│       ├── TaskItem.tsx                 # SQLite Task row with status transitions & delete
│       └── StatusFilter.tsx             # SQLite Status filter buttons (All, Pending, Ongoing, Completed)
│
├── database/
│   └── db.ts                            # Synchronous SQLite transactions via expo-sqlite
│
├── data/
│   ├── vehicles.ts                      # 5 realistic high-performance vehicles
│   ├── places.ts                        # Favorite places with high-contrast readable colors
│   ├── people.ts                        # Dynamic contacts directory
│   └── fruits.ts                        # Exotic fruit models with botanical data
│
└── styles/
    └── appStyles.ts                     # Reusable styles and tutorial design tokens
```

---

## 📚 Detailed Tutorial Breakdown

### 1. UI Components and Layout: Tutorial (TD 1)
Located in: [`src/app/(tabs)/home/index.tsx`](src/app/\(tabs\)/home/index.tsx)

- **Block 1: Vehicles List (`src/components/td1/VehicleList.tsx`)**
  - Displays a horizontal list of 5 high-performance vehicles (Ferrari Roma, Porsche 911 GT3, Tesla Model S Plaid, BMW M4 Competition, Mercedes-AMG GT 63 S).
  - Shows: Brand, Model, Horsepower badge (`speedometer-outline`), and high-resolution photo.
- **Block 2: Favorite Places (`src/components/td1/PlacesList.tsx`)**
  - Displays favorite places with Address + City (Eiffel Tower in Paris, Central Park in New York, Shibuya Sky in Tokyo, Sagrada Família in Barcelona, Sydney Opera House in Sydney).
  - Each item has a distinct, vibrant background color with high-contrast, easily readable typography (WCAG compliant).
- **Block 3: Destination Choice Dialog Box (`src/components/td1/PlacesList.tsx`)**
  - Tapping any place opens a confirmation dialog box with 3 options:
    - **Cancel**: Dismisses dialog and logs cancellation.
    - **Go there**: Simulates GPS direction launch.
    - **Later**: Bookmarks the location for later.
- **Block 4: Travel Map Card (`src/components/td1/TravelCard.tsx`)**
  - Card showcasing Mount Fuji & Lake Kawaguchi.
  - Displays: Image, Place name, City and Country, GPS coordinates, and place description.
  - 2 Action Buttons:
    - **"Visit"**: Launches visit itinerary scheduling and travel pass confirmation.
    - **"See the place"**: Opens a detailed location preview modal with key tour highlights.

---

### 2. Components: Tutorial 2 (TD 2)
Located in: [`src/app/(tabs)/people/index.tsx`](src/app/\(tabs\)/people/index.tsx) and [`src/components/common/`](src/components/common/)

- **Dynamic People Directory & Action Sheet (`src/components/td2/PeopleList.tsx`)**
  - Displays a list of people with avatars, roles, departments, phone numbers, and emails.
  - Supports adding new people dynamically to test React state updates.
  - Tapping any person opens an **Action Sheet Modal** (`src/components/common/ActionSheetModal.tsx`) that:
    - Displays the chosen person's name prominently.
    - Displays 5 options with Ionicons:
      - 📞 **Call** (`call-outline`)
      - ℹ️ **Info** (`information-circle-outline`)
      - 📤 **Share** (`share-social-outline`)
      - 🗑️ **Delete** (`trash-outline`) - removes person from state
      - ❌ **Cancel** (`close-circle-outline`) - dismisses sheet
- **Header Toolbar (`src/components/common/Toolbar.tsx`)**
  - Top header on every view.
  - Extreme right corner button with `ellipsis-vertical-outline` (Ionicons).
  - Left button with `menu-outline` to toggle the Left Menu (Drawer).
  - Supports dynamic title and custom background color.
- **Footer Component (`src/components/common/Footer.tsx`)**
  - Placed at the bottom of the screens.
  - Displays: `© Copyright 2025 Abraham • Mobile Development Course (INGE 4)`.

---

### 3. Left Menu & Tabbed Navigation: Assignment
Located in: [`src/app/_layout.tsx`](src/app/_layout.tsx) and [`src/app/(tabs)/_layout.tsx`](src/app/\(tabs\)/_layout.tsx)

- **Left Menu (Drawer)**:
  - Accessible by swiping from the left or tapping the `menu-outline` button in the Toolbar.
  - Configures the 4 assignment menus + task tracker:
    - **Home**: Hosts the tabbed navigation.
    - **Preferences**: Theme, notifications, haptics, and SQLite cache settings.
    - **My Profile**: Student academic dossier, INGE 4 Semester 7 stats, and acquired competencies.
    - **About**: Coursework summary, module overview, and navigation shortcuts.
    - **Task Tracker (SQLite TD)**: Direct access to the SQLite database lab.
- **Folder & Indexed View Structure**:
  - Every menu and tab corresponds to its own folder with an `index.tsx` file (e.g. `home/index.tsx`, `people/index.tsx`, `fruits/index.tsx`, `preferences/index.tsx`, `profile/index.tsx`, `about/index.tsx`, `tasks/index.tsx`).
- **Tabbed Navigation (`<Tabs>`) under "Home"**:
  - Configures the `<Tabs>` component with 3 tabs:
    - **Home Tab**: Contains TD 1 Blocks 1-4.
    - **People Tab**: Contains TD 2 dynamic people directory + Action Sheet.
    - **Fruits Tab**: Contains the fresh fruits catalog with nutritional data.
- **Custom Header Background Colors**:
  - As required:
    - **"People" view header**: Slate Navy (`#1E293B`).
    - **"Fruits" view header**: Forest Spruce (`#143628`).

---

### 4. SQLite Database using `expo-sqlite` (Task Tracker App)
Located in: [`src/database/db.ts`](src/database/db.ts) and [`src/app/tasks/index.tsx`](src/app/tasks/index.tsx)

- **Database Transaction Helper (`src/database/db.ts`)**:
  - Uses `openDatabaseSync('todoApp.db')` from the latest `expo-sqlite` SDK.
  - `initDatabase()`: Creates the `tasks` table with `id`, `title`, and `status` (`pending`, `ongoing`, `completed`). Seeds sample items on initial launch.
  - `fetchTasks(filter)`: Executes SQL-level filtering (`SELECT * FROM tasks WHERE LOWER(status) = ?`).
  - `insertTask(title)`: Parameterized insert with default `'pending'` status.
  - `updateTask(id, newTitle, newStatus)`: Parameterized update.
  - `deleteTask(id)`: Parameterized deletion.
- **Task Tracker UI**:
  - `TaskCounter`: Real-time task metrics (total tasks or filtered count, breakdown of Pending, Ongoing, Completed).
  - `TaskInput`: Controlled text input with submit button.
  - `StatusFilter`: Filter pills for `All`, `Pending`, `Ongoing`, `Completed`.
  - `TaskItem`: Task row with status badge (tap to cycle `pending` -> `ongoing` -> `completed`) and delete button.
  - `Button title="About App"`: Navigates directly to the About view (`router.push('/about')`).

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React Native 0.88 / Expo SDK 58 (Expo Go compatible)
- **Routing**: Expo Router (Drawer + Bottom Tabs)
- **Database**: `expo-sqlite` (Modern synchronous SQLite API)
- **Iconography**: `@expo/vector-icons` (Ionicons family)
- **Language**: TypeScript (Strict typing, zero compile errors)
