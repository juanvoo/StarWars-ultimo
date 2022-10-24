import axios from 'axios';
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {

        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],


            characters: [],
            planets: [],
            vehicles: [],
            favorites: [],
            auth: false,
            profile: {}



        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            userProfile: async () => {
                const userToken = localStorage.getItem('token')
                try {
                    const response = await axios.get("https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/profile", {
                        headers: {
                            Authorization: "Bearer " + userToken,
                        }
                    })
                    // console.log(data)
                    setStore({
                        profile: response.data.user
                    })
                    return true;

                } catch (error) {
                    console.log(error)
                    if (error.code === "ERR_BAD_REQUEST") {
                        console.log(error.response.data.msg)
                    }
                }
            },

            validarToken: async () => {
                const checkToken = localStorage.getItem("token")
                try {
                    const response = await axios.get('https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/profile', {
                        headers: {
                            Authorization: "Bearer" + checkToken
                        }
                    })
                    return true;
                } catch (error) {
                    console.log(error);
                    if (error.code === 'ERR_BAD_REQUEST') {
                        setStore({
                            auth: false
                        });
                    }
                    return false;
                }
            },
            checkToken: async () => {
                const userToken = localStorage.getItem('token')
                try {
                    const response = await axios.get("https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/valid-token", {

                        headers: {
                            Authorization: "Bearer " + userToken,
                        }
                    })
                    // console.log(data)
                    setStore({
                        auth: response.data.status
                    })
                    return true;

                } catch (error) {
                    console.log(error)
                }
            },
            loadCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        characters: data.results
                    }));
            },
            loadPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        planets: data.results
                    }));
            },
            loadVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        vehicles: data.results
                    }));
            },

            addFavorites: (item) => {

                const store = getStore();

                setStore({
                    favorites: [...store.favorites, item]
                });

            },

            deleteFavorites: (index) => {

                const store = getStore();

                setStore({
                    favorites: store.favorites.filter((favorites, i) => i !== index)
                })


            },

            logout: () => {
                localStorage.removeItem('token')
                setStore({
                    auth: false
                })
                return false;
            },
            login: async (email, password) => {
                try {
                    const response = await axios.post('https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/login', {
                        method: 'POST',
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    if (response.status === 200) {
                        const data = await response.json();
                        localStorage.setItem('token', data.access_token)
                        console.log(data);
                        setStore({
                            auth: true
                        })
                        return true;

                    }

                } catch (error) {
                    console.log(error);
                    return false;
                }

                signup: async (infouserpassw) => {
                    await fetch(
                        "https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/signup", {
                            method: "POST",
                            body: JSON.stringify(infouserpassw),
                            headers: {
                                "Content-Type": "application/json"
                            },


                        }


                    ).then((resp) => {
                        if (resp.ok) {
                            console.log("registro OK");
                        }
                    });
                }

            },
            changeColor: (index, color) => {
                //getstore
                const store = getStore();


                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reseteo
                setStore({
                    demo: demo
                });
            },
        },
    };
};

export default getState;