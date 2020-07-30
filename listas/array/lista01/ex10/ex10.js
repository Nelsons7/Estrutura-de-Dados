
var imagens = ["https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg",
"https://fazendacapoava.com.br/wp-content/uploads/2019/09/natureza.jpg",
"https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imgcontato_com_natureza.jpg",
"https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/06/7-Maravilhas-da-Natureza-Brasil-Capa-740x431.jpg",
"https://cdn.domtotal.com/img/exclusivas/466_1294.jpg",
"https://img.elo7.com.br/product/zoom/17A04B0/painel-paisagem-natureza-m-painel-infantil.jpg",
"https://images-americanas.b2w.io/produtos/01/00/sku/37626/0/37626096_1GG.jpg",
"https://soucatequista.com.br/wp-content/uploads/2011/01/Natureza.jpg",
"https://s2.glbimg.com/mAZeid-fm10T9X31kTdrva1tsnQ=/0x0:1600x1063/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/07/25/dsc-6044.jpg",
"https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg"];


var frases = ['“Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos” – James Cameron, cineasta',
'“O sucesso normalmente vem para quem está ocupado demais para procurar por ele” – Henry David Thoreau, filósofo',
'“A vida é melhor para aqueles para quem fazem o possível para terem o melhor – John Wooden, jogador e treinador de basquete',
'“Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência” – Lisa M. Amos, executiva',
'“Se você não está disposto a arriscar, esteja disposto a uma vida comum” – Jim Rohn, empreendedor',
'“Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso” – Swami Vivekananda, pensador hindu',
'“Para de perseguir o dinheiro e comece a perseguir o sucesso” – Tony Hsieh, empreendedor',
'“Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los” – Walt Disney, desenhista e empreendedor',
'“Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo” – Winston Churchill, político',
'“Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali” – Vaibhav Shah, pensador',
'“Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior” – Denzel Washington, ator',
'“Oportunidades não surgem. É você que as cria” – Chris Grosser, fotógrafo',
'“Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor” – Albert Einstein, físico',
'“Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança” – Charles Darwin, biólogo',
'“A melhor vingança é um sucesso estrondoso” – Frank Sinatra, cantor',
'“Eu não falhei. Só descobri 10 mil caminhos que não eram o certo” – Thomas Edison, inventor',
'“Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele” – David Brinkley, jornalista',
'“Ninguém pode fazer você se sentir inferior sem o seu consentimento” – Eleanor Roosevelt, primeira-dama dos EUA',
'“O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo” – Henry Ford, empreendedor',
'“Se você está atravessando um inferno, continue atravessando” – Churchill',
'“O que nos parece uma provação amarga pode ser uma bênção disfarçada” – Oscar Wilde, escritor',
'“A distância entre a insanidade e a genialidade é medida pelo sucesso” – Bruce Feirstein, roteirista',
'“Não tenha medo de desistir do bom para perseguir o ótimo” – John D. Rockefeller, empreendedor',
'“A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro” – Nathaniel Hawthorne, escritor',
'“Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer” – Einstein',
'“Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem” – Ray Goforth, executivo',
'“Comece de onde você está. Use o que você tiver. Faça o que você puder” – Arthur Ashe, tenista',
'“As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo” – Kevin Kline, ator',
'“Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter” – Thomas Jefferson, político',
'“O ponto de partida de qualquer conquista é o desejo” – Napoleon Hill, assessor político',
'“O sucesso é a soma de pequenos esforços repetidos dia após dia” – Robert Collier, escritor',
'“Todo progresso acontece fora da zona de conforto” – Michael John Bobak',
'“Coragem é a resistência e o domínio do medo, não a ausência dele” – Mark Twain, escritor',
'“Só evite fazer algo hoje se você quiser morrer e deixar assuntos inacabados” – Pablo Picasso, pintor',
'“O único lugar em que o sucesso vem antes do trabalho é no dicionário” – Vidal Sassoon, cabeleireiro',
'“Não sei qual é a chave para o sucesso, mas a chave para o fracasso é tentar agradar a todos” – Bill Cosby, comediante',
'“Embora ninguém possa voltar atrás e começar tudo de novo, qualquer um pode ter um ótimo final” – Carl Bard'];

function geraRandomIntI(){
    return Math.floor(Math.random() * Math.floor(imagens.length));
 };

 function geraRandomIntF(){
    return Math.floor(Math.random() * Math.floor(frases.length));
 };



function geraAll(){
    var a = 0;
    var b = 0;
    a = geraRandomIntI();
    b = geraRandomIntF();
    
    img = "<img  src='" + imagens[a] + "'>";
    
    document.getElementById("imagens").innerHTML = img;

    document.getElementById("frases").innerHTML = frases[b];
}
function geraImagem(){
    var a = 0;
 
    a = geraRandomInt();
 
    img = "<img src='" + imagens[a] + "'>";
 
    document.getElementById("imagens").innerHTML = img;
 }

function alteraFrases(){
    frase = Math.floor(Math.random() * Math.floor(frases.length));
    document.getElementById("frases").innerHTML = frases[frase];
};







