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
    measurement: [

    ],
    maintenance: [

    ],
}

export default data;