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



        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
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
                    const response = await fetch('https://3000-juanvoo-starwarsrestapi-u3xboltijfy.ws-us72.gitpod.io/login', {
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