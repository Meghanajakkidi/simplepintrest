let signupDiv= document.getElementById("signup-section")
            let dashboardDiv = document.getElementById("dashboard-section")
            let container = document.getElementById("content")
            
            dashboardDiv.style.display = "none"
            container.style.display="block"
             signupDiv.style.display="block"
             
             
             dashboardDiv.style.display = "none"
            function goTodashboard() {
            container.style.display="none"
            signupDiv.style.display = "none"
            dashboardDiv.style.display = "block"
         }
        async function signup(event) {
            event.preventDefault()
            let email = document.getElementById("s-email").value
            let password = document.getElementById("s-password").value
            console.log(email, password)
            await localStorage.setItem(email, password)

            const user = await localStorage.getItem(email)
            
            if (!user) {
                alert("user not found")
            } else {
                if (user=== password) {
                    alert("login success")
                    localStorage.setItem("loggedInUser", email)
                    goTodashboard()
                } else {
                    alert("invalid credentials")
                }
            }
        }
        
        
        function msg(){
            
            button.style.display="block"
        }