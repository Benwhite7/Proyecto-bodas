const baseDatosInvitados = {
    "balceda": { titulo: "Familia Balceda", pases: 4, nombres: ["Pablo Balceda", "Romy de Balceda", "Dan Balceda", "Esmeralda Balceda"] },
    "vilela": { titulo: "Familia Vilela", pases: 4, nombres: ["José Vilela", "Nancy Vilela", "Keila de Pantoja", "Paul Pantoja"] },
    "montero": { titulo: "Familia Montero", pases: 3, nombres: ["Luis Montero", "Francisca de Montero", "Edaluz Montero"] },
    "solis": { titulo: "Familia Solís Trujillo", pases: 3, nombres: ["Juan Solís", "Victoria de Solís"] },
    "anquis": { titulo: "Familia Anquis", pases: 4, nombres: ["Omar Anquis", "Lea Anquis", "Maricielo Anquis", "Camila Anquis"] },
    "nario": { titulo: "Familia Nario", pases: 4, nombres: ["Giovanni Nario", "Gudilia de Nario", "Angely Nario", "Giovanni Jesús Nario"] },
    "taype": { titulo: "Yenny Taype", pases: 1, nombres: [] },
    "maldonado": { titulo: "Piero Maldonado", pases: 1, nombres: [] },
    "bravo": { titulo: "Lucy Bravo", pases: 1, nombres: [] },
    "martinez": { titulo: "Evelin Martinez", pases: 1, nombres: [] },
    "cheng": { titulo: "Lidia Cheng", pases: 1, nombres: [] },
    "hinostroza": { titulo: "Familia Hinostroza", pases: 2, nombres: ["Adrián Hinostroza", "Alexandra de Hinostroza"] },
    "manrique": { titulo: "Familia Manrique", pases: 2, nombres: ["Ricardina Manrique", "Jackelin Manrique"] },
    "diaz": { titulo: "Familia Diaz", pases: 2, nombres: ["Cesar Diaz", "Verónica de Diaz"] },
    "altamirano": { titulo: "Familia Altamirano", pases: 3, nombres: ["Lucy Mori", "Mily Mori", "Jezer Altamirano"] },
    "veramendi": { titulo: "Familia Veramendi", pases: 2, nombres: ["Pedro Veramendi", "Susana De Veramendi"] },
    "carbajal": { titulo: "Familia Carbajal", pases: 2, nombres: ["Edward Carbajal", "Marilyn de Carbajal"] },
    "alvines": { titulo: "Familia Alvines", pases: 3, nombres: ["Verónica Veramendi", "Gonzalo Alvines", "Maricielo Alvines"] },
    "gomez": { titulo: "Familia Gómez", pases: 2, nombres: ["Blanca Jiménez", "Prissila Gómez"] },
    "rafael": { titulo: "Familia Rafael", pases: 3, nombres: ["Ursula Rafael", "Edoardo Mancin", "Jacinta Jiménez"] },
    "solis-rafael": { titulo: "Familia Solís Rafael", pases: 2, nombres: ["Lot Solís", "Ana María De Solís"] },
    "flores": { titulo: "Familia Flores", pases: 4, nombres: ["Jhon Flores", "Malena de Flores", "Kiara Flores", "Aimar Zapata"] },
    "burgos": { titulo: "Familia Burgos", pases: 2, nombres: ["José Burgos", "Isabel Burgos"] },
    "mamani": { titulo: "Familia Mamani", pases: 2, nombres: ["Alberto Mamani", "Teresa de Mamani"] },
    "julia": { titulo: "Julia Cheng", pases: 1, nombres: [] },
    "ramos": { titulo: "Familia Ramos", pases: 4, nombres: ["Dielmer Ramos", "Giuliana de Ramos", "Luisa Villanueva", "Eugenio Villanueva"] },
    "isabel-garcia": { titulo: "Isabel Garcia", pases: 1, nombres: ["Pase personal"] },
    "otilia-garcia": { titulo: "Otilia Garcia", pases: 1, nombres: ["Pase personal"] },
    "caceres": { titulo: "Familia Cáceres", pases: 2, nombres: ["Carlos Cáceres", "Patricia de Cáceres"] },
    "gonzales": { titulo: "Familia Gonzales", pases: 2, nombres: ["Jesus González", "Anita de Gonzales"] },
    "juan": { titulo: "Juan Valencia", pases: 1, nombres: [] },
    "isidoro": { titulo: "Isidoro Ocaña", pases: 1, nombres: [] },
    "padilla": { titulo: "Familia Padilla", pases: 2, nombres: ["Hector Padilla", "Juana de Padilla"] },
    "vilela-inv": { titulo: "Familia Vilela", pases: 0, nombres: [] },
    "vilma": { titulo: "Vilma Vilela", pases: 2, nombres: [] },
    "henry": { titulo: "Familia Ramos Vilela", pases: 4, nombres: ["Herny Ramos Vilela", "Karen de Ramos", "e hijos"] },
    "aide": { titulo: "Aide Vilela Carreño", pases: 1, nombres: [] },
    "wilfredo": { titulo: "Wilfredo Vilela Carreño", pases: 1, nombres: [] },
    "vilverto": { titulo: "Familia Vilela Carreño", pases: 2, nombres: ["Vilverto Vilela Carreño", "Gladys Salazar de Vilela"] },
    "flor": { titulo: "Flor Vilela", pases: 2, nombres: [] },
    "yorka": { titulo: "Yorka Avila Vilela", pases: 1, nombres: [] },
    "darwin": { titulo: "Darwin Avila Vilela", pases: 4, nombres: ["Darwin Avila Vilela", "Jessica de Vilela", "e hijos"] },
    "pilar": { titulo: "Pilar Viera Carreño", pases: 1, nombres: [] },
    "sulbaran": { titulo: "Familia Sulbarán", pases: 3, nombres: ["Ricardo Sulbarán", "Elizabeth de Sulbarán", "Arantxa Sulbarán"] },
    "sanchez": { titulo: "Laura Sanchez", pases: 1, nombres: [] },
    "gonzales_kety": { titulo: "Kety de Gonzales", pases: 1, nombres: [] }, // Renombrado
    "ramirez": { titulo: "Delia de Ramirez", pases: 1, nombres: [] },
    "sotomayor-jorge": { titulo: "Familia Sotomayor", pases: 4, nombres: ["Jorge Sotomayor", "Yobanna Sotomayor", "e hijos"] },
    "claudia": { titulo: "Familia Fernández Chipana", pases: 3, nombres: ["Claudia Chipana", "Alan Fernández", "Isa Fernández Chipana"] },
    "ana": { titulo: "Ana Andrade", pases: 1, nombres: [] },
    "eduarte": { titulo: "Familia Eduarte", pases: 2, nombres: ["Rubén Eduarte", "Yuniefer de Eduarte"] },
    "otiniano": { titulo: "Alexandra Otiniano", pases: 1, nombres: [] },
    "katy": { titulo: "Katy Ariza", pases: 1, nombres: [] },
    "tenorio": { titulo: "Familia Tenorio", pases: 2, nombres: ["José Tenorio", "Teresa de Tenorio"] },
    "rosalinda": { titulo: "Rosalinda", pases: 1, nombres: [] },
    "zarela": { titulo: "Zarela Villacrez", pases: 1, nombres: [] },
    "pizarro": { titulo: "Familia Pizarro", pases: 3, nombres: ["Aldo Bonifaz", "Ornella Pizarro", "Alejandro Pizarro"] },
    "violin": { titulo: "Violinistas", pases: 2, nombres: [] },
    "alejandro": { titulo: "Alejandro Sotomayor y Esposa", pases: 2, nombres: [] },
    "flores-": { titulo: "Familia Flores", pases: 3, nombres: ["Jenner Flores", "Lucía de Flores", "Estrella Flores"] },
    "carrasco": { titulo: "Familia Carrasco", pases: 2, nombres: ["Eduardo Carrasco", "Rosa de Carrasco"] },
    "calatayud": { titulo: "Familia Calatayud", pases: 2, nombres: ["Alberto Calatayud", "Yanet Calatayud"] },
    "gonzales-": { titulo: "Familia Gonzales", pases: 2, nombres: ["Juan Gonzales", "Liz Gonzales"] },
};


function getParamsURL() {
    let identity;
    const params = new URLSearchParams(window.location.search);
    return identity = params.get('inv');
};

function permitirPase() {
    let whoIs = getParamsURL();
    let dataInvited = baseDatosInvitados[whoIs];

    if (dataInvited === undefined) {
        window.location.href = 'index.html';
    }
}

permitirPase();


let gridOfDays = document.querySelector(".gridDays");

const daysOfMayo = [["","","","","","01","02"],
                    ["03","04","05","06","07","08","09"],
                    ["10","11","12","13","14","15","16"],
                    ["17","18","19","20","21","22","23"],
                    ["24","25","26","27","28","29","30"],
                    ["31","","","","","",""]];

for (let i = 0; i < daysOfMayo.length; i++) {
    for (let y = 0; y < daysOfMayo[i].length; y++) {
        gridOfDays.innerHTML += `<p>${daysOfMayo[i][y]}</p>`
    }
}