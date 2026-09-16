import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            // Sends request to your Java Backend
            const response = await axios.post('http://localhost:8080/api/auth/login', {
                email: email,
                password: password
            });

            // If successful
            const jwtToken = response.data.token;
            setToken(jwtToken);
            setMessage("✅ Login Successful!");
            console.log("JWT Token:", jwtToken);
            alert("Login Successful! Welcome to UniCore.");

        } catch (error) {
            // If failed
            console.error("Login Error:", error);
            setMessage("❌ Login Failed: Invalid Credentials");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>UniCore Portal</h2>
                <p style={styles.subtitle}>Secure Campus Login</p>

                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="student@unicore.edu"
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="submit" style={styles.button}>
                        Secure Login
                    </button>
                </form>

                {message && (
                    <div style={{...styles.message, color: message.includes("Success") ? "green" : "red"}}>
                        {message}
                    </div>
                )}

                {token && (
                    <div style={styles.tokenBox}>
                        <strong>Your Session Token:</strong><br/>
                        <span style={{fontSize: "10px"}}>{token.substring(0, 50)}...</span>
                    </div>
                )}
            </div>
        </div>
    );
}

// Simple CSS styles inside the file for a clean look
const styles = {
    container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5", fontFamily: "Arial, sans-serif" },
    card: { width: "350px", padding: "30px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", backgroundColor: "white", textAlign: "center" },
    title: { margin: "0 0 5px 0", color: "#333" },
    subtitle: { margin: "0 0 20px 0", color: "#666", fontSize: "14px" },
    inputGroup: { marginBottom: "15px", textAlign: "left" },
    label: { display: "block", marginBottom: "5px", fontSize: "12px", fontWeight: "bold", color: "#555" },
    input: { width: "100%", padding: "10px", borderRadius: "5px", border: "