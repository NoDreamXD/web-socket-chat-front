<template>
  <div class="header w-100 py-2">
    <div class="back-button">
      <div class="back-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="30"
          height="30"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 30 30"
        >
          <path
            fill="#333"
            d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
          />
        </svg>
      </div>
      <p class="back" color="#333">Назад</p>
    </div>
    <div class="control-button">
      <div class="add-chat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="20"
          height="20"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
        >
          <g fill="none">
            <path
              d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
              stroke="#333"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
      <div class="turn-off-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="30"
          height="30"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 30 30"
        >
          <path
            d="M12 21c4.411 0 8-3.589 8-8c0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"
            fill="#333"
          />
          <path d="M11 2h2v10h-2z" fill="#333" />
        </svg>
      </div>
    </div>
    <form>
      <!-- @TODO: вынести в отдельный компонент с цветом и размерами как пропы -->
      <div class="search-panel">
        <div class="search-icon-wapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="20"
            height="20"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
              fill="#333"
            />
          </svg>
        </div>
        <input class="search" type="text" name="search" placeholder="Поиск" />
      </div>
    </form>
  </div>
  <div class="body w-50">
    <form>
      <div class="message-field w-100">
        <input
          class="textField"
          type="text"
          name="textField"
          placeholder="Напишите сообщение..."
        />
        <div class="send-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5z"
                fill="#333"
              />
            </g>
          </svg>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.back-button {
  height: 30px;
  width: 80px;
  position: absolute;
  top: 12px;
}
.back-icon {
  position: absolute;
}
.back {
  position: relative;
  left: 6px;
}
.control-button {
  height: 30px;
  width: 78px;
  position: absolute;
  left: 1840px;
}
.add-chat {
  position: absolute;
}
.turn-off-button {
  position: relative;
  top: 3px;
  left: 4px;
}
.search {
  height: 30px;
  width: 256px;
  border: solid 1px #333333;
  border-left: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
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
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.header {
  height: 50px;
  background: #ffffff;
  border: solid 1px #333333;
}
.body {
  height: calc(100% - 99px);
  background: linear-gradient(
    90.29deg,
    rgba(255, 0, 0, 0) 0.28%,
    rgba(246, 244, 244, 0) 0.29%,
    rgba(246, 244, 244, 0.85) 3.48%,
    rgba(246, 244, 244, 0.85) 95.2%,
    rgba(246, 244, 244, 0) 99.76%
  );
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.message-field > * {
  float: right;
}
.message-field {
  height: 30px;
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-95%, 50%);
}
.send-icon {
  height: 30px;
  position: relative;
  border: solid 1px #333333;
  border-left: none;
  background-color: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
.textField {
  height: 30px;
  width: calc(100%-24px);
  position: absolute;
  border: solid 1px #333333;
  border-right: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
@media (max-width: 960px) {
  .body {
    width: 100%;
  }
}
</style>
