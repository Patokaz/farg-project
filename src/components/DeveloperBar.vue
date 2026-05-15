<template>
  <div class="developer-bar">
    <p>
      Desenvolvido por
      <a
        href="https://noffmarketing.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Noff Marketing Digital
      </a>
    </p>
  </div>
</template>

<style scoped>
.developer-bar {
  width: 100%;
  padding: 14px 20px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.developer-bar p {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.developer-bar a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.developer-bar a:hover {
  opacity: 0.7;
}
</style>