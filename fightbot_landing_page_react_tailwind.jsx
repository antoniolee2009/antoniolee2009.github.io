<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fightbot</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800">
  <!-- Header -->
  <header class="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-full bg-green-600"></div>
        <span class="font-bold text-xl">FIGHTBOT</span>
      </div>
      <nav class="hidden sm:flex gap-6 text-sm">
        <a href="#features" class="hover:text-gray-900">Recursos</a>
        <a href="#how" class="hover:text-gray-900">Como funciona</a>
        <a href="#pricing" class="hover:text-gray-900">Planos</a>
        <a href="#contact" class="hover:text-gray-900">Contato</a>
      </nav>
      <div class="flex gap-3">
        <button class="hidden sm:inline-flex px-4 py-2 rounded-xl border">Login</button>
        <button class="px-4 py-2 rounded-xl bg-green-600 text-white">Começar</button>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 pt-14 pb-10">
    <div>
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs mb-4">
        Agendamentos automáticos para academias de luta
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight">
        Chatbot que lota suas aulas e atende 24/7.
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        O <span class="font-semibold">Fightbot</span> marca horários, confirma presença e responde alunos no WhatsApp, Instagram e site — sem você perder tempo no balcão.
      </p>
      <div class="mt-6 flex gap-3 flex-wrap">
        <button class="px-6 py-3 rounded-xl bg-green-600 text-white">Criar conta grátis</button>
        <button class="px-6 py-3 rounded-xl border border-green-600 text-green-700">Ver demo</button>
      </div>
    </div>
    <div class="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white">
      <div class="text-sm font-semibold mb-3">Fightbot · Demo</div>
      <div class="space-y-3 text-sm">
        <div class="p-3 rounded-2xl bg-gray-100 w-fit max-w-[85%]">Olá! Quer agendar uma aula de Muay Thai, Jiu-Jítsu ou Boxe?</div>
        <div class="p-3 rounded-2xl bg-green-600 text-white w-fit ml-auto">Muay Thai · Hoje às 19h</div>
        <div class="p-3 rounded-2xl bg-gray-100 w-fit max-w-[85%]">Perfeito! Confirmação enviada. Deseja receber lembrete?</div>
      </div>
      <div class="mt-4 flex gap-2">
        <input placeholder="Escreva sua mensagem" class="flex-1 rounded-xl border px-4 py-3" />
        <button class="px-4 py-2 rounded-xl bg-green-600 text-white">Enviar</button>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section id="features" class="max-w-7xl mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-center mb-6">Tudo que sua academia precisa</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
      <div class="p-6 border rounded-xl">Atendimento 24/7</div>
      <div class="p-6 border rounded-xl">Agendamento inteligente</div>
      <div class="p-6 border rounded-xl">Pagamentos & termos</div>
      <div class="p-6 border rounded-xl">Integra em minutos</div>
      <div class="p-6 border rounded-xl">Respostas treinadas</div>
      <div class="p-6 border rounded-xl">Relatórios</div>
    </div>
  </section>

  <!-- Pricing -->
  <section id="pricing" class="max-w-7xl mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-center mb-6">Planos simples</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="p-6 border rounded-xl">
        <h3 class="font-semibold">Start</h3>
        <p class="text-2xl font-bold">R$0/mês</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Widget no site</li>
          <li>10 agendamentos/mês</li>
          <li>Respostas básicas</li>
        </ul>
      </div>
      <div class="p-6 border-2 border-green-600 rounded-xl">
        <h3 class="font-semibold">Pro <span class="text-green-600 text-xs ml-1">RECOMENDADO</span></h3>
        <p class="text-2xl font-bold">R$149/mês</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Agendamentos ilimitados</li>
          <li>WhatsApp + Instagram</li>
          <li>Lembretes automáticos</li>
          <li>Relatórios de ocupação</li>
        </ul>
      </div>
      <div class="p-6 border rounded-xl">
        <h3 class="font-semibold">Studio</h3>
        <p class="text-2xl font-bold">R$399/mês</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-1">
          <li>Conta multiunidade</li>
          <li>Integração com pagamentos</li>
          <li>Suporte prioritário</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="max-w-7xl mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold mb-2">Pronto para lotar suas turmas?</h2>
    <form class="mt-4 flex gap-3 flex-wrap">
      <input type="email" placeholder="seuemail@academia.com" required class="flex-1 rounded-xl border px-4 py-3" />
      <button class="px-6 py-3 rounded-xl bg-green-600 text-white">Quero testar</button>
    </form>
  </section>

  <!-- Footer -->
  <footer class="border-t border-gray-100 text-center text-xs text-gray-500 py-6">
    © <span id="year"></span> Fightbot. Todos os direitos reservados.
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
