import EnergySaveAnimation from '../utils/animation/energy-save.json'
import SmartPhoneAnimation from '../utils/animation/smartphone.json'
import VolunteersAnimation from '../utils/animation/volunteers.json'
import PagSeguroAnimation from '../utils/animation/pagseguro.json'
import MensalPaymentAnimation from '../utils/animation/mensal-payment.json'
import DonationAnimation from '../utils/animation/donation.json'
import ChristAnimation from '../utils/animation/christ.json'
import MegaphoneAnimation from '../utils/animation/megaphone.json'
import BankAnimation from '../utils/animation/bank.json'

export const HELP_METHODS = {
  PAG_SEGURO: {
    SLUG: 'PAG_SEGURO',
    TITLE: 'PagSeguro ou Paypal',
    ANIMATION: PagSeguroAnimation,
  },
  ENERGY_BILL: {
    SLUG: 'ENERGY_BILL',
    TITLE: 'Energia elétrica',
    ANIMATION: EnergySaveAnimation
  },
  TELEPHONE_BILL: {
    SLUG: 'TELEPHONE_BILL',
    TITLE: 'Conta de telefone Oi',
    ANIMATION: SmartPhoneAnimation,
  },
  VOLUNTEER: {
    SLUG: 'VOLUNTEER',
    TITLE: 'Voluntariado',
    ANIMATION: VolunteersAnimation,
  },
  MONTHLY_DONATOR: {
    SLUG: 'MONTHLY_DONATOR',
    TITLE: 'Mantenedor Mensal',
    ANIMATION: MensalPaymentAnimation,
  },
  DONATION: {
    SLUG: 'DONATION',
    TITLE: 'Doações',
    ANIMATION: DonationAnimation,
  },
  PRAYS: {
    SLUG: 'PRAYS',
    TITLE: 'Rezas',
    ANIMATION: ChristAnimation,
  },
  SHARER: {
    SLUG: 'SHARER',
    TITLE: 'Divulgação',
    ANIMATION: MegaphoneAnimation,
  },
  BANK_TRANSACTION: {
    SLUG: 'BANK_TRANSACTION',
    TITLE: 'Transação bancária',
    ANIMATION: BankAnimation,
  },
}

export const PAG_SEGURO = {
  description: `Atualmente a CVM conta com duas opções terceirizadas de doação. Por favor, selecione uma das duas opções abaixo para prosseguir:`,
  links: {
    pagSeguro: 'https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=d10d7b2b8be60f7f86f52be4a43790d24a107af7f556c1c8cf9b333966466f26&e=true#rmcl',
    paypal: 'https://www.paypal.com/donate?token=IC-SscYbE1E5E9wqfMPyppcSj4htnIkZ81YktuWCV8CeuKpI-NcRNUpHBC9erI6i5wEdZMSWT3cVrtG_'
  }
}

export const ENERGY_BILL = `Com o objetivo de manter e ampliar os projetos que são oferecidos gratuitamente à comunidade carente, queremos convidar você e sua família a fazer parte desta grande trabalho. Participe você também da campanha beneficente realizada pela CVM – Creche Vinde a Mim as Criancinhas, pois crianças, adolescentes, adultos e famílias dependem do seu carinho e de sua solidariedade como força para a transformação social.
    Amigo (a), ao receber uma ligação de nossas operadoras, não desligue o telefone, com sua ajuda estaremos proporcionando ás crianças, adolescentes, adultos e famílias atendidas, novas oportunidades de assegurar a dignidade, a valorização e o resgate  de novos valores. O valor doado é totalmente espontâneo, você escolhe o valor da sua contribuição (não tem mínimo e nem máximo), e vem descrito na sua fatura de energia elétrica da Celesc, com todos os dados da entidade (nome, telefone).
    Você poderá ainda efetuar o cancelamento da sua doação assim que desejar, pois o cancelamento é efetuado na mesma hora.
    Se preferir, entre em contato com a nossa Central de Atendimento (48) 3246-9908 para maiores informações, ou através da própria Celesc`


export const TELEPHONE_BILL = `O valor doado é totalmente espontâneo, você escolhe o valor da sua contribuição (não tem mínimo e nem máximo), e vem descrito na conta de telefone OI, com todos os dados da entidade (nome, telefone). Se preferir, entre em contato com a nossa Central de Atendimento (48) 3246-9908 para maiores informações, ou através da própria OI.`

export const VOLUNTEER = `A Importância do Voluntário
    Nas cidades, nos bairros, nas ONGs, nos grupos de auto ajuda, nos clubes, nas associações culturais e esportivas, nas instituições e nas empresas, milhões de pessoas ajudam umas as outras, ajudam a quem está em situação mais difícil, e realizam atividades que beneficiam sua comunidade, seu país e nosso planeta. Muitas vezes essas pessoas nem sabem que são voluntárias.
    POR ISSO O VOLUNTÁRIO MERECE SER VALORIZADO, DIVULGADO E FORTALECIDO.
    Quem é o voluntário?
    VOLUNTÁRIO É AQUELE QUE DEDICA SEU TEMPO, TRABALHO E TALENTO ESPONTANEAMENTE E SEM REMUNERAÇÃO, A CAUSAS DE INTERESSE SOCIAL E COMUNITÁRIO.
    O VOLUNTARIADO É SOLIDARIEDADE E AJUDA A QUEM PRECISA, MAS TAMBÉM É DEFESA DA NATUREZA E DO MEIO AMBIENTE, CULTURA, ESPORTE, LAZER E DIVERSÃO. É AÇÃO DIRETA DE SOCORRO, MAS TAMBÉM REINVIDICA E LUTA POR UMA CAUSA.
    Lei do voluntário
    A Lei 9.608/98 regularizou a relação de trabalho voluntário no Brasil, demonstrando sua possibilidade ao poder judiciário e às delegacias do trabalho que, frequentemente demonstravam-se surpresas com esse tipo de contrato.
    Dada à existência de diferentes formas de voluntariado e de voluntários de diferentes matrizes, a lei foi importante para legitimar a relação entre voluntários e entidades sociais, e prevenir problemas para ambas as partes.
    A lei opta por caracterizar o trabalho voluntário de forma bastante simples, como uma relação em que está ausente a remuneração. Lei Nº 9.608, de 18 de Fevereiro de 1998.
    Seja você também um Voluntário
    Você está disposto a ser um voluntário. Nós precisamos do seu trabalho.
    Entre em contato conosco, através do 48-3357-9400, teremos o maior prazer em atendê-lo.
    `

export const MONTHLY_DONATOR = `Caso você tenha interesse em ser um (a) mantenedor (a) da Instituição, enviamos em seu endereço um carnê, e você pagara em qualquer banco, um valor de acordo com suas condições.`

export const DONATION = `Alimentos/Roupas/Calçados/Produtos de Limpeza/Produtos de higiene pessoal/Material de Escritório/Utensílios em geral/Móveis e afins, etç.`

export const PRAYS = `Orar pela equipe e principalmente pelas crianças, adolescentes, adultos e famílias atendidas. Pedimos também, que orem pela diretoria e funcionários, pedindo unção e discernimento para tomada de decisões em favor de todos os atendidos. `

export const SHARER  = `Faça parte você também desta grande família, divulgue o trabalho da CVM. Participe de campanhas, e venha visitar, você será muito bem vindo.`

export const BANK_TRANSACTION = {
  bank: "Banco do Brasil",
  agency: "5248-5",
  account: "90246-2"
}

export const HELP_METHODS_TEXTS = {
  VOLUNTEER,
  ENERGY_BILL,
  TELEPHONE_BILL,
  MONTHLY_DONATOR,
  DONATION,
  PRAYS,
  SHARER,
  BANK_TRANSACTION,
  PAG_SEGURO
}
