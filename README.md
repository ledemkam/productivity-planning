# ProductivityPlanning

## Aperçu de l'Architecture API et du Design

### Architecture générale

Ce projet suit une **architecture hexagonale** (ports & adapters) avec Angular et Firebase comme backend.

#### Structure des dossiers

```
src/app/
├── core/              # Logique métier partagée
├── visitor/           # Pages pour utilisateurs non connectés
└── membership/        # Pages pour utilisateurs connectés
```

### Design Pattern : Ports & Adapters

#### Ports (Interfaces/Contrats)

- `AuthenticationService` - Contrat pour l'authentification
- `UserService` - Contrat pour la gestion des utilisateurs

#### Adapters (Implémentations)

- `AuthenticationFirebaseService` - Implémentation Firebase pour l'auth
- `UserFirebaseService` - Implémentation Firebase pour les utilisateurs

### API Firebase utilisées

#### Authentication REST API

```typescript
// Inscription
POST https://identitytoolkit.googleapis.com/v1/accounts:signUp

// Connexion
POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword

// Refresh token
POST https://securetoken.googleapis.com/v1/token
```

#### Firestore REST API

```typescript
// Récupérer un utilisateur
GET https://firestore.googleapis.com/v1/projects/{projectId}/databases/(default)/documents/users/{userId}

// Créer un utilisateur
POST https://firestore.googleapis.com/v1/projects/{projectId}/databases/(default)/documents/users
```

### Use Cases (Logique métier)

#### Authentification

- `LoginUserUseCase` - Connexion utilisateur
- `RegisterUserUseCase` - Inscription utilisateur

#### Gestion d'état

- `UserStore` - Store NgRx Signals pour l'utilisateur
- `WorkdayStore` - Store pour la gestion des tâches

### Initialisation automatique

- `AutoConnectInitializer` - Reconnexion automatique via refresh token

### Modèles de données

```typescript
// Utilisateur
interface User {
  id: string;
  name: string;
  email: string;
}

// Tâche Pomodoro
interface Task {
  type: TaskType;
  title: string;
  pomodoroCount: PomodoroCount;
  pomodoroList: PomodoroList;
}
```

Cette architecture permet une séparation claire entre la logique métier et les détails d'implémentation, facilitant les tests et la maintenance.

```

```
