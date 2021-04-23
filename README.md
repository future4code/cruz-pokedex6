## POKEDEX

Link para o site criado por meio do surge: http://pokedex-leonardo-nathalia-nicolas.surge.sh/

### REQUISITOS TÉCNICOS
- Leonardo Federmann
- Nathalia Figueira
- Nicolas Alexandre
  
### DESCRIÇÃO
Projeto em React criado para uma atividade do curso de programação da Labenu com o intuito de ser uma simulação de uma lista de alguns principais pokemons por meio da qual o usuário poderá adicionar alguns para uma lista particular, chamada **Pokedex**. Para tanto, foi utilizada a seguinte API pública: 

https://pokeapi.co/   

Primeiramente, o usuário é conduzido à página de Home, no qual será possível visualizar uma lista com os 20 primeiros pokemons disponíveis na API. Cada pokemon é disponibilizado em um card próprio, no qual constam o seu nome, sua imagem frontal e dois botões:
- **ADICIONAR POKEMON:** permite adicionar o referido pokemon à Pokedex. Caso o botão seja clicado, tal pokemon será removido da lista apresentada na Home;
- **VER DETALHES:** direciona o usuário à página de detalhes com as informações deste pokemon, que será explanada posteriormente.  
Na parte superior da Home, verifica-se a presença de um Header com o logo da animação Pokemon e, na lateral esquerda, um botão de menu que, se clicado, exibirá um menu responsivo. Salienta-se que esse Header e seu menu encontram-se presentes em todas as páginas da aplicação, tendo botões com funcionalidades diferentes em cada uma.   
No caso da Home, tal menu apresentará os botões:
-**MINHA POKEDEX:** direcionará o usuário à Pokedex;
-**VOLTAR:** direcionará o usuário à página anterior, caso haja.    

Na página da Pokedex, será apresentada uma lista com todos os pokemons adicionados pelo usuário a sua Pokedex particular. Cada um será exibido em um card contendo o nome e uma imagem frontal do Pokemon e três botões:
- **REMOVER POKEMON:** retirará o referido Pokemon da Pokedex. Caso clicado, esse botão também retornará o Pokemon à lista apresentada na Home, posicionando-o na mesma ordem na qual estava antes de ser adicionado à Pokedex;
- **VER DETALHES:** direciona o usuário à página de detalhes com as informações deste pokemon, que será explanada posteriormente.
- **BATALHAR:** adicionará o Pokemon a um campo de batalha, explanado a seguir.    
A Pokedex também apresenta uma funcionalidade de batalha de Pokemons, por meio da qual o usuário poderá selecionar dois pokemons de sua lista particular para uma luta. Para cada Pokemon selecionado, serão somados os valores totais de pontos de vida, ataque, defesa, ataque especial, defesa especial e velocidade, todos encontrados na API utilizada. O Pokemon com maior somatória de pontos será o vencedor. Caso as pontuações se igualem, o resultado será um empate.  
Tal campo também apresenta um botão de **ENCERRAR BATALHA**, no qual todos os Pokemons adicionados à batalha são removidos e a funcionalidade é reiniciada.  
Ressalta-se que a batalha apenas será realizada quando o usuário selecionar dois Pokemons, estando ele impossibilitado de adicionar um terceiro Pokemon ao combate - caso tente fazê-lo, será exibido um alerta orientando-o a, antes, encerrar a atual batalha.  
Na Pokedex, o menu responsivo encontrado no Header conterá os botões:  
-**HOME:** direcionará o usuário à Home;  
-**VOLTAR:** direcionará o usuário à página anterior.     

A terceira página apresentará os detalhes de um Pokemon selecionado pelo usuário tanto na Home quanto na Pokedex. Tal página conterá o nome do Pokemon, quatro imagens (duas frontais, sendo uma normal e uma brilhante; e duas traseiras, sendo também uma normal e uma brilhante), seus pontuações em determinadas categorias (pontos de vida, ataque, defesa, ataque especial, defesa especial e velocidade - as mesmas utilizadas na pontuação da batalha), seu tipo e 5 de seus principais ataques. No menu responsivo, serão apresentados os botões:
-**ADICIONAR/REMOVER DA POKEDEX:** caso o Pokemon apresentado não esteja na Pokedex, esse botão irá removê-lo da lista na Home e adicioná-lo à Pokedex; caso esteja, fará o processo inverso;
-**HOME:** direcionará o usuário à Home; 
-**MINHA POKEDEX:** direcionará o usuário à Pokedex;
-**VOLTAR:** direcionará o usuário à página anterior.    

Por fim, caso o link digitado pelo usuário não corresponda a nenhuma das páginas anteriores, ele será direcionado a uma página de erro informando que aquele link não existe e apresentando um botão que irá direcioná-lo à Home.

### REQUISITOS TÉCNICOS

A atividade aspirou a exercitar os conhecimentos relativos a estado global, à função **React.createContext** e ao hook **useContext**, estudados na semana de realização da atividade.´Isto posto, foi criado um estado global(encontrado na pasta **global**, no qual podem ser encontradas as arrays de estado referentes às listas de pokemons supracitadas, as respectivas funções para alterá-las e a requisição utilizada para obter a lista de Pokemons da API) Ademais, foram utilizados outros conhecimentos adquiridos ao longo do curso, dentre os quais estão:
- **REACT ROUTER:** a navegação entre páginas utilizou as tags BrowserRouter, Switch e Route, próprias do React Router;
- **COMPONENTES FUNCIONAIS:** não foram utilizados componentes de classe, visando ao melhor desempenho do código;
- **HOOKS:** os hooks useState e useEffect foram amplamente utilizados;
- **ESTILIZAÇÃO:** a estilização foi realizada por meio do Design System **MATERIAL UI** - cujos recursos também foram usados para elaborar o menu responsivo - e do **styled-components**. As tags estilizadas criadas concentram-se no arquivo **style.js**, encontrado na pasta **components**.  

### O QUE FUNCIONA

Todas as funcionalidades supracitadas estão em pleno desempenho. A aplicação também está responsiva, para todos os aparelhos, exceto IPad, Surface Duo e Galaxy Fold.

### O QUE NÃO FUNCIONA

A funcionalidade de batalha possui um bug. Entre os cards dos Pokemons selecionados, haverá um "X" indicando que um Pokemon lutará contra o outro. Caso os Pokemons selecionados sejam diferentes, não haverá problemas; caso sejam o mesmo, tal "X" irá se encontrar ao lado do card do segundo Pokemon, fora de sua posição correta. 
