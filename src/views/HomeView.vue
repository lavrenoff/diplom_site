<template>
  <main>
    <section>
      <SliderComponent />
    </section>

    <section class="dostavka center">
      <div class="dostavka__art">
        <img src="../assets/img/sk1.svg" alt="">
        <p>
          <span>Бесплатная</span>
          доставка по городу
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk2.svg" alt="">
        <p>
          Открытка <span>в подарок</span>
          и фото вручения
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk3.svg" alt="" style="margin-bottom: -15px">
        <p>
          <span>Круглосуточная</span>
          доставка
        </p>
      </div>
      <div class="dostavka__art">
        <img src="../assets/img/sk4.svg" alt="">
        <p>
          Накопительная система <span>скидок</span>
        </p>
      </div>
    </section>

    <section class="tovars center">
      <div class="tovars__filters">
        <div class="tovars__items">
          <div class="tovars__sort">
            <p class="tovars__p">Сортировать по:</p>
            <a href="#">Новизне</a>
            <a href="#">Цена по возрастанию</a>
            <a href="#">Цена по убыванию</a>
            <a href="#">Популярности</a>
          </div>
          <div class="tovars__items"
            style="background-color: white; height: 100%; border-radius: 10px; width: 100%; margin-top: 22px;">

          </div>
        </div>
        <div class="tovars__flt">
          <div class="tovars__find">
            <input class="text-field__input" type="text" id="find" placeholder="Поиск">
            <span class="text-field__aicon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.29979 1.4C3.59368 1.4 1.39995 3.5938 1.39995 6.3C1.39995 9.00619 3.59368 11.2 6.29979 11.2C9.00589 11.2 11.1996 9.00619 11.1996 6.3C11.1996 3.5938 9.00589 1.4 6.29979 1.4ZM0 6.3C0 2.8206 2.82051 0 6.29979 0C9.77906 0 12.5996 2.8206 12.5996 6.3C12.5996 9.77939 9.77906 12.6 6.29979 12.6C2.82051 12.6 0 9.77939 0 6.3Z"
                  fill="#828282" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.76017 9.76003C10.0335 9.48666 10.4767 9.48666 10.7501 9.76003L13.795 12.805C14.0683 13.0784 14.0683 13.5216 13.795 13.795C13.5216 14.0683 13.0784 14.0683 12.8051 13.795L9.76017 10.75C9.48681 10.4766 9.48681 10.0334 9.76017 9.76003Z"
                  fill="#828282" />
              </svg>
            </span>
          </div>
          <div class="tovars__price">
            <p class="tovars__p">Стоимость:</p>
            <div class="tovars__prtxt">
              <label for="flt0" class="tovars__lb">
                <input class="custom-checkbox" type="checkbox" name="" id="flt0" checked>

                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>
                до 2500 руб.
              </label>
            </div>
            <div class="tovars__prtxt"><label for="flt2500" class="tovars__lb"><input class="custom-checkbox"
                  type="checkbox" name="" id="flt2500">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                2500-4000 руб.
              </label>
            </div>
            <div class="tovars__prtxt"><label for="flt4000" class="tovars__lb"><input class="custom-checkbox"
                  type="checkbox" name="" id="flt4000">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>


                4000-6000 руб.
              </label>
            </div>
            <div class="tovars__prtxt"><label for="flt6000" class="tovars__lb"><input class="custom-checkbox"
                  type="checkbox" name="" id="flt6000">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                от 6000 руб.
              </label>
            </div>
          </div>

          <div class="tovars__bukets">
            <p class="tovars__p">Букет с ...:</p>
            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ1" class="tovars__lb">
                  <input type="checkbox" name="" id="typ1" class="custom-checkbox" checked>
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Розами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ2" class="tovars__lb">
                  <input type="checkbox" name="" id="typ2" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Тюльпанами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ3" class="tovars__lb">
                  <input type="checkbox" name="" id="typ3" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>


                  Гортензиями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ4" class="tovars__lb">
                  <input type="checkbox" name="" id="typ4" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Герберами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ5" class="tovars__lb">
                  <input type="checkbox" name="" id="typ5" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Подсолнухами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ6" class="tovars__lb">
                  <input type="checkbox" name="" id="typ6" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Орхидеями
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ7" class="tovars__lb">
                  <input type="checkbox" name="" id="typ7" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Ирисами
                </label>
              </div>
            </div>

            <div class="tovars__prtxt">
              <div class="tovars__prtxt"><label for="typ8" class="tovars__lb">
                  <input type="checkbox" name="" id="typ8" class="custom-checkbox">
                  <div class="svg">
                    <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                      <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                    </svg>
                    <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                    </svg>

                  </div>

                  Лилиями
                </label>
              </div>
            </div>



          </div>

          <div class="tovars_packed">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt"><label for="buk1" class="tovars__lb">
                <input type="checkbox" name="" id="buk1" class="custom-checkbox" checked>
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Букетом
              </label>
            </div>

            <div class="tovars__prtxt"><label for="buk2" class="tovars__lb">
                <input type="checkbox" name="" id="buk2" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                В корзине
              </label>
            </div>

            <div class="tovars__prtxt"><label for="buk3" class="tovars__lb">
                <input type="checkbox" name="" id="buk3" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                В коробке
              </label>
            </div>

          </div>

          <div class="tovars_colors">
            <p class="tovars__p">Цветы упаковано:</p>

            <div class="tovars__prtxt"><label for="clr1" class="tovars__lb">
                <input type="checkbox" name="" id="clr1" class="custom-checkbox" checked>
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Белая
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr2" class="tovars__lb">
                <input type="checkbox" name="" id="clr2" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Розовая
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr3" class="tovars__lb">
                <input type="checkbox" name="" id="clr3" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Красная
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr4" class="tovars__lb">
                <input type="checkbox" name="" id="clr4" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Желтая
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr5" class="tovars__lb">
                <input type="checkbox" name="" id="clr5" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Оранжевая
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr6" class="tovars__lb">
                <input type="checkbox" name="" id="clr6" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Бордовая
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr7" class="tovars__lb">
                <input type="checkbox" name="" id="clr7" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Синяя
              </label>
            </div>

            <div class="tovars__prtxt"><label for="clr8" class="tovars__lb">
                <input type="checkbox" name="" id="clr8" class="custom-checkbox">
                <div class="svg">
                  <svg class="check" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#E9FFE2" stroke="#6AAE55" />
                    <path d="M5 7L7.5 9.5L12 5" stroke="#6AAE55" stroke-width="2" />
                  </svg>
                  <svg class="nocheck" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white" stroke="#BDBDBD" />
                  </svg>

                </div>

                Фиолетовая
              </label>
            </div>

          </div>


        </div>
      </div>
    </section>

    <section class="buket center">
      <div class="buket__title">
        <h2><span>ЗАКАЗАТЬ</span> В 5 ШАГОВ</h2>
      </div>


      <div class="buket__items">
        <div class="buket__item">
          <img src="../assets/img/buk1.svg" alt="buk1">
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Выберите букет;</p>
            <p class="buket__txt">В каталоге выберите понравившийся букет;</p>
          </div>
        </div>
        <div class="buket__item">
          <img src="../assets/img/buk2.svg" alt="buk2">
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Выберите размер и дополнение;</p>
            <p class="buket__txt">На странице с описанием букета выберите подходящий размер. По желанию, добавьте к букету
              мягкую игрушку, сладости или любой другой подарок;</p>
          </div>
        </div>
        <div class="buket__item">
          <img src="../assets/img/buk3.svg" alt="buk3">
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Укажите данные для доставки;</p>
            <p class="buket__txt">Заполните форму доставки и оплатите заказ удобным для вас способом;</p>
          </div>
        </div>
        <div class="buket__item">

          <img src="../assets/img/buk4.svg" alt="buk4">
          <div class="buket_itemtxt">
            <p class="buket__zagolovok">Букет готов!</p>
            <p class="buket__txt">Букет будет собран из свежайших цветов и доставлен получателю к указанной дате и
              времени.</p>
          </div>


        </div>
      </div>
    </section>

    <section class="otziv center">
      <div class="otziv__left">
        <div class="otziv__left_top">
          <h2 class="otziv__title">
            <span>ФОТО</span>ХВАСТЫ
          </h2>
          <a href="#">Больше фото</a>
        </div>
        <div class="otziv__left_bottom">
          <img src="../assets/img/otz1.png">
          <img src="../assets/img/otz2.png">
          <img src="../assets/img/otz3.png">
          <img src="../assets/img/otz4.png">
        </div>
      </div>
      <div class="otziv__right">
        <div class="otziv__right_top">
          <h2 class="otziv__title">ОТЗЫВЫ</h2>
          <a href="#">Смотреть все</a>
        </div>

        <div class="otziv__comments">

          <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>

              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже
              неожиданно красивее чем на картинке
            </p>
          </div>

          <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>

              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже
              неожиданно красивее чем на картинке
            </p>
          </div>

          <div class="otziv__comment">
            <div class="otziv__family">
              <div class="otziv__family_title">
                <p class="otziv__family_p">Анатолий Петров</p>
                <p class="otziv__family_dt">20.08.19 22:32 г. Москва</p>
              </div>
              <div class="otziv__otmetka">
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#E0E0E0" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.20703 1.24219L5.42969 4.87891L1.41016 5.45312C0.699219 5.5625 0.425781 6.4375 0.945312 6.95703L3.81641 9.77344L3.13281 13.7383C3.02344 14.4492 3.78906 14.9961 4.41797 14.668L8 12.7812L11.5547 14.668C12.1836 14.9961 12.9492 14.4492 12.8398 13.7383L12.1562 9.77344L15.0273 6.95703C15.5469 6.4375 15.2734 5.5625 14.5625 5.45312L10.5703 4.87891L8.76562 1.24219C8.46484 0.613281 7.53516 0.585938 7.20703 1.24219Z"
                    fill="#F2C94C" />
                </svg>

              </div>
            </div>
            <p class="otziv__family_txt">
              Огромное спасибо флористам! Остались очень довольны оказанными услугами,мастера своего дела! Букетик даже
              неожиданно красивее чем на картинке
            </p>
          </div>




        </div>

      </div>

    </section>

    <section class="opisanie center">
      <p>Букеты создаются максимально похожими на фотографию с сайта. Приведенные примеры букетов являются возможными
        вариантами составления цветочных композиций, так как они изготавливаются вручную флористами, и поэтому возможно
        незначительное отклонение по форме от фотографии на сайте. При этом возможна замена по количеству, ассортименту и
        составу цветов, в зависимости от сезонности, наличия цветов в том или ином регионе и других факторов на
        равноценные им по качеству и стоимости. Это позволит нам выполнить заказ без задержек.
        <br>
        По России и странам СНГ доставка букета возможна в день оформления и оплаты заказа. По странам дальнего зарубежья
        доставка возможна через 2—3 рабочих дня после оплаты.
        Ближайшая дата и время доставки будут отображаться на странице оформления заказа с учетом выбранного города
        доставки. Мы рекомендуем оформлять и оплачивать заказы заранее, особенно в праздничный период. Более подробную
        информацию смотрите на страницеrr
      </p>
    </section>



  </main>
</template>

<script>
import SliderComponent from "../components/SliderComponent.vue"

export default {
  name: "HomeView",

  components: {
    SliderComponent
  },


  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>
.otziv {
  padding-top: 115px;
  padding-bottom: 115px;
  background-color: #E5E5E5;
  display: flex;

  &__comments{
    display: flex;
    flex-direction: column;    
    height: 356px;
    justify-content: space-between;
  }
  
  &__comment {    
    padding-bottom: 25px;
  }

  &__comment:not(:last-child) {
    
    border-bottom: 1px solid #E0E0E0;
  }

  &__family {
    display: flex;
    justify-content: space-between;

    &_p {
      color: #6AAE55;
      font-weight: 700;
    }

    &_dt {
      font-size: 12px;
      color: #828282;
    }

    &_txt {
      font-size: 16px;
      color: #7E6579;
    }
  }

  a {
    color: #6AAE55;
    font-size: 16px;
    text-decoration: none;
    border-bottom: 1px dotted #6AAE55;
    margin-bottom: 10px;
  }

  &__left {
    // width: 35%;

    &_top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;
    }

    &_bottom {
      display: grid;
      grid-template-columns: 168px 168px;
      grid-template-rows: 168px 168px;

      gap: 20px;
    }
  }

  &__right {
    padding-left: 57px;
    // width: 65%;

    &_top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 30px;
    }
  }

  &__title,
  &__title span {
    font-family: 'KARTON';
    color: #5B4A58;
  }

  &__title span {
    color: #6AAE55;
  }

  &__title {
    font-size: 26px;
  }


}


.custom-checkbox {
  display: none;
  // -webkit-appearance: none;
}

input:checked~.svg .check {
  display: block;
}

input:not(checked)~.svg .check {
  display: none;
}

input:checked~.svg .nocheck {
  display: none;
}

input:not(checked)~.svg .nocheck {
  display: block;
}


#find {
  border: none;
  background-color: #FAFAFA;
  font-size: 16px;
}

.tovars {
  background-color: #F9F8FB;
  font-size: 16px;
  padding-top: 100px;
  padding-bottom: 100px;

  &__lb {
    display: flex;
    align-items: center;
    gap: 13px
  }

  &__price,
  &__bukets,
  &_packed,
  &_colors {
    padding: 15px;
    border-bottom: 1px solid #F2F2F2;
  }

  &__p {
    font-size: 14px;
    color: #BDBDBD;
    font-weight: 700;
  }

  &__flt {
    background-color: white;
    border-radius: 10px;
    // padding: 15px;
  }

  &__items {
    padding-right: 20px;
  }

  &__sort {
    background-color: white;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
  }

  &__sort p {
    color: #828282;
  }

  &__sort a {
    text-decoration: none;
    color: #BDBDBD;
  }

  &__find {
    position: relative;
    border-bottom: 1px solid #F2F2F2;
    padding: 15px;
  }

  &__find input {
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 25px;

  }


}




.text-field__aicon {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 30px;
  // right: 0.875rem;
  // width: 1rem;
  // cursor: pointer;
  // color: #bdbdbd;
  // transition: color 0.15s ease-in-out;
}

.text-field__aicon:hover {
  color: #212529;
}



.tovars {
  &__flt {
    display: flex;
    width: 25%;
    flex-direction: column;
  }

  &__items {
    width: 75%;
  }

  &__filters {
    display: flex;
  }

  &__sort {
    display: flex;
    justify-content: space-between;
  }

  &__prtxt {
    display: flex;
    gap: 13px;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  &__prtxt input {
    border: 1px solid red;
  }
}

.buket {
  padding-bottom: 95px;

  &__zagolovok {
    color: #6AAE55;
    font-size: 18px;
    font-weight: 700;
  }

  &__txt {
    color: #5B4A58;
    font-size: 16px;
    font-weight: 400;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
    width: 50%;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  &_itemtxt {
    padding-left: 23px;
  }

  &_itemtxt p {
    padding-bottom: 13px;
  }

  &__title {
    padding-top: 80px;
    padding-bottom: 18px;
    text-align: center;
  }

  &__title h2,
  &__title span {
    font-family: 'KARTON';
    font-size: 24px;
  }

  &__title span {
    color: #6AAE55;
  }
}

.opisanie {
  color: #828282;
  font-size: 16px;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #F0F0F0;

}

.dostavka {
  display: flex;
  justify-content: space-around;
  // justify-content: center;
  align-items: flex-end;
  // padding-top: 65px;
  // padding-bottom: 65px;

  &__art span {
    color: #6AAE55;
    font-size: 18px;
  }

  &__art {

    text-align: center;
    padding: 50px;
  }
}</style>
