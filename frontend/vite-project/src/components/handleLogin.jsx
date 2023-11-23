const handleLogin = async (userData) => {
  try {
    console.log('User data submitted:', userData);

  } catch (error) {
    console.error('Authentication error:', error.message);
  }
}
export default handleLogin;
