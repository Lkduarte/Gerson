import Entrada from "../io/entrada"
import Empresa from "../modelo/empresa"
import Listagem from "../negocio/Classes/listagem"
import AdicionarVenda from "../negocio/Cliente/adicionarProdutoServico"
import AtualizarCliente from "../negocio/Cliente/atualizarCliente"
import CadastroCliente from "../negocio/Cliente/cadastrarCliente"
import DeletarCliente from "../negocio/Cliente/deletarCliente"
import ListagemClientes from "../negocio/Cliente/listarClientes"

export default class MenuCliente extends Listagem {
    private empresa: Empresa

    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa
    }

    menuCliente(empresa: Empresa) {
        let operacao: boolean = true;

        console.log("\nMenu do Cliente");

        while (operacao) {
            console.log("\nOpções para clientes:\n")
            console.log(`1 - Cadastrar um cliente`);

            if (empresa.getClientes.length) {
                console.log(`2 - Atualizar um cliente`);
                console.log(`3 - Excluir um cliente`);
                console.log(`4 - Listar clientes cadastrados`);
                console.log(`5 - Adicionar serviço ou venda para cliente`);

            }

            console.log(`0 - Voltar para o menu principal\n`);

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ");

            if (empresa.getClientes.length == 0 && [2, 3, 4, 5].includes(opcao)) {
                return
            }

            if (opcao > 5) {
                return
            }

            switch (opcao) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes);
                    cadastro.cadastrar();
                    break;

                case 2:
                    let atualiza = new AtualizarCliente(empresa.getClientes);
                    atualiza.atualiza();
                    break;

                case 3:
                    let deleta = new DeletarCliente(empresa.getClientes);
                    deleta.deletar();
                    break;

                case 4:
                    let listagem = new ListagemClientes(empresa.getClientes);
                    listagem.listar();
                    break;
                case 5:
                    let venda = new AdicionarVenda(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
                    venda.listar();
                    break;

                case 0:
                    return;

                default:
                    console.log("\nInsira uma opção válida ");
            }
        }
    }
    public listar(): void {
        this.menuCliente(this.empresa)
    }
}