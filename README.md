# TrabalhoSD-Threads-middleware-e-Paralelismo

Ideia Geral: Implementar um sistema distribuído com uso de middleware.

• Requisito Funcional do Sistema: Software de TRANSFORMAÇÃO DE TEXTO.

•	Recursos Físicos: Smartphone, computador 01, computador 02, computador 03.

•	Arquitetura: O smartphone é um cliente que está conectado ao computador 01 (middleware), que por sua vez está conectado a dois servidores (computador 02 e 03).

o	O computador 02 realiza operações de CONCATENAR O TEXTO,

o	O computador 03 realiza operações de TORNAR O TEXTO CAIXA ALTA.

•	Modo de Demostração: O cliente requisita um serviço e o middleware encaminha a requisição AO MESMO TEMPO USANDO THREADS aos servidores. 
O resultado é retornado para o cliente pelo middleware quando este por sua vez receber os dois resultados.

•	Comunicação: Os serviços nos servidores serão providos por uma interface RESTful 

•	Apresentação das Informações: Fazer a GUI apenas para o cliente (tela de entrada e reposta da requisição).
