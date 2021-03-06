const data = {
    equipments: [
        { nome: "Geladeira1", dM: "DM001", serial: "001", modelo: "SB01", marca: "Eletrolux", dataAquisicao: "2019-01-01", potencia: 350, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira2", dM: "DM002", serial: "002", modelo: "SB01", marca: "Eletrolux", dataAquisicao: "2019-01-01", potencia: 350, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira3", dM: "DM003", serial: "003", modelo: "SB77", marca: "Consul", dataAquisicao: "2019-01-01", potencia: 300, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira4", dM: "DM004", serial: "004", modelo: "SB77", marca: "Consul", dataAquisicao: "2019-01-01", potencia: 300, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira5", dM: "DM005", serial: "005", modelo: "SB02", marca: "Eletrolux", dataAquisicao: "2019-01-01", potencia: 300, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira6", dM: "DM006", serial: "006", modelo: "SB02", marca: "Eletrolux", dataAquisicao: "2019-01-01", potencia: 300, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira7", dM: "DM007", serial: "007", modelo: "SB17", marca: "Consul", dataAquisicao: "2019-01-01", potencia: 400, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira8", dM: "DM008", serial: "008", modelo: "SB13", marca: "Consul", dataAquisicao: "2019-01-01", potencia: 400, tensao: 220, consumoEstim: 500 },
        { nome: "Geladeira9", dM: "DM009", serial: "009", modelo: "SB22", marca: "Brastemp", dataAquisicao: "2019-01-01", potencia: 250, tensao: 220, consumoEstim: 500 },
    ],
    alerts: [
        { alert: "Temperatura interna ideal", equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", data: "2020-05-04", hora: "16:44", variant: "success" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", data: "2020-05-04", hora: "15:00", variant: "warning" },
        { alert: "Alto consumo de energia", equipment: "Geladeira3", modelo: "SB77", marca: "Consul", data: "2020-05-04", hora: "12:30", variant: "danger" },
        { alert: "Temperatura interna ideal", equipment: "Geladeira4", modelo: "SB77", marca: "Consul", data: "2020-05-04", hora: "09:00", variant: "success" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", data: "2020-05-04", hora: "13:45", variant: "warning" },
        { alert: "Alto consumo de energia", equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", data: "2020-05-04", hora: "18:00", variant: "danger" },
        { alert: "Temperatura interna ideal", equipment: "Geladeira7", modelo: "SB17", marca: "Consul", data: "2020-05-04", hora: "22:50", variant: "success" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira8", modelo: "SB13", marca: "Consul", data: "2020-05-04", hora: "16:20", variant: "warning" },
        { alert: "Alto consumo de energia", equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2020-05-04", hora: "04:20", variant: "danger" },
        { alert: "Alto consumo de energia", equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", data: "2020-05-20", hora: "04:20", variant: "danger" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", data: "2020-05-21", hora: "16:20", variant: "warning" },
        { alert: "Temperatura interna ideal", equipment: "Geladeira3", modelo: "SB77", marca: "Consul", data: "2020-05-22", hora: "22:50", variant: "success" },
        { alert: "Alto consumo de energia", equipment: "Geladeira4", modelo: "SB77", marca: "Consul", data: "2020-05-23", hora: "18:00", variant: "danger" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", data: "2020-05-24", hora: "13:45", variant: "warning" },
        { alert: "Temperatura interna ideal", equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", data: "2020-05-25", hora: "09:00", variant: "success" },
        { alert: "Alto consumo de energia", equipment: "Geladeira7", modelo: "SB17", marca: "Consul", data: "2020-06-02", hora: "12:30", variant: "danger" },
        { alert: "Aberto mais de 5 minutos", equipment: "Geladeira8", modelo: "SB13", marca: "Consul", data: "2020-06-03", hora: "15:00", variant: "warning" },
        { alert: "Temperatura interna ideal", equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2020-06-07", hora: "16:44", variant: "success" },
        { alert: "Alto consumo de energia", equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2020-06-10", hora: "16:44", variant: "danger" },
        { alert: "Alto consumo de energia", equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2020-06-11", hora: "16:44", variant: "danger" },
    ],
    measurements: [
        { equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", potencia: 350, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:00:00", measurementEnd: "2020-01-01T10:00:00" },
        { equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", potencia: 350, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:04:00", measurementEnd: "2020-01-01T00:05:30" },
        { equipment: "Geladeira3", modelo: "SB77", marca: "Consul", potencia: 300, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:05:00", measurementEnd: "2020-01-01T00:05:30" },
        { equipment: "Geladeira4", modelo: "SB77", marca: "Consul", potencia: 300, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:06:00", measurementEnd: "2020-01-01T01:05:30" },
        { equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", potencia: 300, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:07:00", measurementEnd: "2020-01-01T00:08:40" },
        { equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", potencia: 300, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:08:00", measurementEnd: "2020-01-01T00:09:30" },
        { equipment: "Geladeira7", modelo: "SB17", marca: "Consul", potencia: 400, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:09:00", measurementEnd: "2020-01-01T00:15:10" },
        { equipment: "Geladeira8", modelo: "SB13", marca: "Consul", potencia: 400, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:10:00", measurementEnd: "2020-01-01T00:25:30" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", potencia: 250, data: "2019-03-31", bandeira: "Verde", measurementStart: "2020-01-01T00:11:00", measurementEnd: "2020-01-01T01:00:00" },
    ],
    maintenances: [
        { equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira3", modelo: "SB77", marca: "Consul", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira4", modelo: "SB77", marca: "Consul", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira7", modelo: "SB17", marca: "Consul", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira8", modelo: "SB13", marca: "Consul", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-03-31", detalhes: "Manutenção de 3 meses" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-04-15", detalhes: "Vazamento de água" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-05-15", detalhes: "Porta com mau contato" },
        { equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira3", modelo: "SB77", marca: "Consul", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira4", modelo: "SB77", marca: "Consul", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira7", modelo: "SB17", marca: "Consul", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira8", modelo: "SB13", marca: "Consul", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-06-30", detalhes: "Manutenção de 6 meses" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-07-15", detalhes: "Vazamento de água" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-08-15", detalhes: "Porta com mau contato" },
        { equipment: "Geladeira1", modelo: "SB01", marca: "Eletrolux", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira2", modelo: "SB01", marca: "Eletrolux", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira3", modelo: "SB77", marca: "Consul", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira4", modelo: "SB77", marca: "Consul", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira5", modelo: "SB02", marca: "Eletrolux", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira6", modelo: "SB02", marca: "Eletrolux", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira7", modelo: "SB17", marca: "Consul", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira8", modelo: "SB13", marca: "Consul", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
        { equipment: "Geladeira9", modelo: "SB22", marca: "Brastemp", data: "2019-09-30", detalhes: "Manutenção de 9 meses" },
    ],
    user: [
        { name: "Paulo", email: "paulo@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Germano", email: "germano@americanas.com", company: "Americanas", permission: "Gerente" },
        { name: "Gustavo", email: "gustavo@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Erick", email: "erick@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Leandro", email: "leandro@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Thiago", email: "thigo@americanas.com", company: "Americanas", permission: "Gerente" },
        { name: "Julia", email: "julia@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Carol", email: "carol@americanas.com", company: "Americanas", permission: "Gerente" },
        { name: "Sandra", email: "sandra@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Cristiano", email: "cristiano@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Andre", email: "andre@americanas.com", company: "Americanas", permission: "Gerente" },
        { name: "Giovana", email: "giovana@americanas.com", company: "Americanas", permission: "Supervisor" },
        { name: "Maria", email: "maria@americanas.com", company: "Americanas", permission: "Gerente" },
    ],
    company: [
        { name: "Americanas", adress: "Rua Luz Marina 1395", phoneNumber: "996845729", CNPJ: "49.695.881/0001-00" },
        { name: "Burger King", adress: "Rua Padre Champagnat 34", phoneNumber: "987344678", CNPJ: "87.375.018/0001-56" },
        { name: "Walmart", adress: "Rua Joaquim Gomes da Silva 1986", phoneNumber: "338873488", CNPJ: "13.621.472/0001-03" },
        { name: "Festval", adress: "Rua Niterói 964", phoneNumber: "398439287", CNPJ: "80.321.896/0001-40" },
        { name: "Madero", adress: "Rua Otávio Torres Pereira 1022", phoneNumber: "987542231", CNPJ: "45.703.270/0001-05" },
    ]
}

export default data;