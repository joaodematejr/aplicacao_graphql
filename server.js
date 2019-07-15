/* # Write your query or mutation here

{
  clientes{
	nome,
  idade,
  cpf,
  data_nasc,
  signo
	}
} */



var { ApolloServer, gql } = require('apollo-server');

var clientes = [

  {
    "nome": "Diogo Marcelo Moura",
    "idade": 46,
    "cpf": "250.275.951-07",
    "rg": "49.009.490-9",
    "data_nasc": "16\/06\/1973",
    "signo": "Gêmeos",
    "mae": "Laís Marlene Emanuelly",
    "pai": "Luan Benjamin Pietro Moura",
    "email": "ddiogomarcelomoura@universo3d.com.br",
    "senha": "9aGAozhnZt",
    "cep": "64606-350",
    "endereco": "Quadra 09",
    "numero": 505,
    "bairro": "Paraibinha",
    "cidade": "Picos",
    "estado": "PI",
    "telefone_fixo": "(89) 2913-1136",
    "celular": "(89) 99608-0125",
    "altura": "1,80",
    "peso": 72,
    "tipo_sanguineo": "A+",
    "cor": "azul"
  },
  {
    "nome": "Diogo Noah Tomás Cavalcanti",
    "idade": 44,
    "cpf": "206.339.399-00",
    "rg": "42.193.540-6",
    "data_nasc": "26\/08\/1975",
    "signo": "Virgem",
    "mae": "Isis Pietra Tereza",
    "pai": "Felipe Márcio Cavalcanti",
    "email": "diogonoahtomascavalcanti-81@bodyfast.com.br",
    "senha": "6cFlwcjIbh",
    "cep": "76801-234",
    "endereco": "Rua Gonçalves Dias",
    "numero": 231,
    "bairro": "Olaria",
    "cidade": "Porto Velho",
    "estado": "RO",
    "telefone_fixo": "(69) 2992-6762",
    "celular": "(69) 99642-2510",
    "altura": "1,96",
    "peso": 59,
    "tipo_sanguineo": "AB-",
    "cor": "vermelho"
  },

  {
    "nome": "Antonella Julia Lopes",
    "idade": 22,
    "cpf": "831.796.121-42",
    "rg": "40.988.549-6",
    "data_nasc": "12\/11\/1997",
    "signo": "Escorpião",
    "mae": "Ana Andreia Clara",
    "pai": "Emanuel Bento Raul Lopes",
    "email": "antonellajulialopes-77@csjsistemas.com.br",
    "senha": "xxu6hpjo5u",
    "cep": "45078-140",
    "endereco": "Rua Treze",
    "numero": 708,
    "bairro": "Zabelê",
    "cidade": "Vitória da Conquista",
    "estado": "BA",
    "telefone_fixo": "(77) 3901-5428",
    "celular": "(77) 98432-6594",
    "altura": "1,74",
    "peso": 52,
    "tipo_sanguineo": "AB+",
    "cor": "verde"
  },

  {
    "nome": "Carla Daniela Araújo",
    "idade": 69,
    "cpf": "445.326.871-87",
    "rg": "27.381.341-9",
    "data_nasc": "05\/06\/1950",
    "signo": "Gêmeos",
    "mae": "Luana Allana",
    "pai": "Antonio Gabriel Araújo",
    "email": "carladanielaaraujo_@proshock.com.br",
    "senha": "gwWInHQtDt",
    "cep": "72879-363",
    "endereco": "Quadra Quadra 2F",
    "numero": 753,
    "bairro": "Ypiranga",
    "cidade": "Valparaíso de Goiás",
    "estado": "GO",
    "telefone_fixo": "(61) 2884-5276",
    "celular": "(61) 99679-6931",
    "altura": "1,52",
    "peso": 45,
    "tipo_sanguineo": "AB+",
    "cor": "vermelho"
  }


];

var typeDefs = gql`
  type Cliente {
    nome: String
    idade: Int
    cpf: String
    rg: String
    data_nasc: String
    signo: String
    mae: String
    pai: String
    email: String
    senha: String
    cep: String
    endereco: String
    numero: String
    bairro: String
    cidade: String
    estado: String
    telefone_fixo: String
    celular: String
    altura: String
    peso: Int
    tipo_sanguineo: String
    cor: String





  }
  type Query {
    clientes: [Cliente]
  }
`;

const resolvers = {
  Query: {
    clientes: () => clientes,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});