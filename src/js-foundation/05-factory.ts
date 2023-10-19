// const { createID, getAge } = require('../plugins');

// const obj = { name: 'John', birthdate: '1985-10-21' };

interface BuildMakerPersonProps {
	createID: () => string;
	getAge: (birthdate: string) => number;
}

interface PersonProps {
	name: string;
	birthdate: string;
}

//? Recibe las dependencias desde dode se la invoque (dependency injection), retorna una funcion para poder crear una persona.
//? CreateID y getAge estan en modulos aparte por si el dia de mañana hay que cambiar de dependencia o hacerlo de otra
//? forma no haya que cambiarlo en cada lugar donde se usa sino en uno solo, por eso estan en modulos aparte para evitar acoplamiento.

export const buildMakePerson = ({ createID, getAge }: BuildMakerPersonProps) => {
	return ({ name, birthdate }: PersonProps) => {
		return {
			id: createID(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
};

// const jhon = buildPerson(obj);

// console.log(jhon);

// module.exports = {
// 	buildMakePerson,
// };
