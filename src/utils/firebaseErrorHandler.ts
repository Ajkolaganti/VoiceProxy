export const handleFirebaseError = (error: any, fallbackMessage = 'An error occurred'): string => {
  console.error('Firebase error:', error);
  
  // Extract error code if available
  const errorCode = error?.code || '';
  
  // Map common Firebase error codes to user-friendly messages
  switch (errorCode) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Invalid email or password';
    case 'auth/email-already-in-use':
      return 'This email is already in use';
    case 'auth/weak-password':
      return 'Password is too weak';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection';
    case 'permission-denied':
      return 'You do not have permission to perform this action';
    default:
      // If we have an error message, use it, otherwise use the fallback
      return error?.message || fallbackMessage;
  }
}; 