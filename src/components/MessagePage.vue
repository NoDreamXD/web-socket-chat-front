<template>
  <div class="header w-100 py-2">
    <form>
      <!-- @TODO: вынести в отдельный компонент с цветом и размерами как пропы -->
      <div class="search-panel">
        <div class="search-icon-wapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input class="search" type="text" name="search" placeholder="Поиск" />
      </div>
    </form>
  </div>
  <div class="body w-50">
    <form>
      <input
        class="textField w-100"
        type="text"
        name="textField"
        placeholder="Напишите сообщение..."
      />
    </form>
  </div>
</template>

<style scoped>
.search-panel {
  display: inline-block;
}
.search-panel > * {
  float: left;
}
.search-icon-wapper {
  height: 30px;
  width: 30px;
  border: 1px solid #333333;
  border-right: none;
}
.header {
  height: 64px;
  background: #ffffff;
  border: solid 1px #333333;
}
.body {
  height: calc(100% - 88px);
  background: linear-gradient(
    90.29deg,
    rgba(255, 0, 0, 0) 0.28%,
    rgba(246, 244, 244, 0) 0.29%,
    rgba(246, 244, 244, 0.85) 3.48%,
    rgba(246, 244, 244, 0.85) 95.2%,
    rgba(246, 244, 244, 0) 99.76%
  );
  /* background: #dcdcdc; */
  /* opacity: 0.33; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.textField {
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, -50%);
}
@media (max-width: 992px) {
  .body {
    width: 100vh;
  }
}
</style>
