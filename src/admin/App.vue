<template lang="pug">
  .main-wrapper
    header.header
      .header__left
        .header__user-avatar
          .avatar
            img(src="require('../images/content/user.jpg')")
        .header__user-name Наталья Быстрова
        h3.header__title Панель администрирования
        
      .header__right
        a.header__logout(href="#") Выйти

    nav.nav
      ul.nav__list
        li.nav__item
          a.nav__link.nav__link_active(href="#") Обо мне
        li.nav__item
          a.nav__link(href="#") Работы
        li.nav__item
          a.nav__link(href="#") Отзывы

    section.section.about-me
      .section__header.about-me__header
        h2.section__title.about-me__title Блок "Обо мне"
        button.about-me__button
          span.about-me__button-icon.plus +
          span.button__text Добавить группу
      .about-me__body
        ul.about-me__blocks
          li.about-me__item
            table
              thead
                tr
                  th
                    input.input.about-me__item-name(type="text" placeholder="Название новой группы") 
                  th
                  th
                      span.about-me__control-button.about-me__control-button_save
                  th
                      span.about-me__control-button.about-me__control-button_close
              tbody
              tfoot
                tr
                  td
                    input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
                  td 
                    input.input.about-me__item-percent(type="text" placeholder="100%") 
                  td(colspan="2")
                    button.button-add +
          li.about-me__item
            table
              thead
                tr
                  th
                    input.input.about-me__item-name(type="text" placeholder="Название новой группы" value="Workflow") 
                  th
                  th
                      span.about-me__control-button.about-me__control-button_save
                  th
                      span.about-me__control-button.about-me__control-button_close
              tbody
                tr
                  td Git
                  td 100 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
                tr
                  td Terminal
                  td 90 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
                tr
                  td Gulp
                  td 80 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
                tr
                  td Webpack
                  td 100 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
              tfoot
                tr
                  td
                    input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
                  td 
                    input.input.about-me__item-percent(type="text" placeholder="100%") 
                  td(colspan="2")
                    button.button-add +

          li.about-me__item
            table
              thead
                tr
                  th
                    input.input.about-me__item-name(type="text" placeholder="Название новой группы" value="Frontend") 
                  th
                  th
                  th
                      span.about-me__control-button.about-me__control-button_edit
              tbody
                tr
                  td Html5
                  td 100 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
                tr
                  td Css3
                  td 90 %
                  td
                    span.about-me__control-button.about-me__control-button_save
                  td
                    span.about-me__control-button.about-me__control-button_close
                tr
                  td JavaScript
                  td 80 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
                tr
                  td jQuery и Vue.js
                  td 100 %
                  td
                    span.about-me__control-button.about-me__control-button_edit
                  td
                    span.about-me__control-button.about-me__control-button_remove
              tfoot
                tr
                  td
                    input.input.about-me__item-skill(type="text" placeholder="Новый навык") 
                  td 
                    input.input.about-me__item-percent(type="text" placeholder="100%") 
                  td(colspan="2")
                    button.button-add +
    section.section.works
      .section__header
        h2.section__title Блок "Работы"
      .admin-form__wrapper
        form.admin-form.works-form
          .admin-form__header.works-form__header
            h3.form__title Редактирование Работы
          .admin-form__body
            .admin-form__column
              .works__preview-loader-wrapper
                .works__preview-loader
                  p.works__preview-loader-desc Перетащите или загрузите для загрузки изображения
                  label.input-type-file
                    .button.button_primary.works__button Загрузить
                    input.input-type-file__input(type='file')
            .admin-form__column
              .admin-form__row
                label.feedback-form__block
                  .label.feedback-form__label Название
                  input.input.input_without-icons.feedback-form__input(
                    type='text'
                    placeholder='Дизайн сайта для авто салона Porsche'
                    required=''
                  )
                  span.feedback-form__block-error
              .admin-form__row
                label.feedback-form__block
                  .label.feedback-form__label Ссылка
                  input.input.input_without-icons.feedback-form__input(
                    type='text'
                    placeholder='https://www.porsche-pulkovo.ru'
                    required=''
                  )
                  span.feedback-form__block-error
              .admin-form__row
                label.feedback-form__block.feedback-form__block_full-width
                  .label.feedback-form__label Описание
                  textarea.textarea.textarea_bordered.feedback-form__textarea(
                    type='text'
                    placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей'
                  )
                  span.feedback-form__block-error
              .admin-form__row
                label.feedback-form__block
                  .label.feedback-form__label Добавление тэга
                  input.input.input_without-icons.feedback-form__input(
                    type='text'
                    placeholder='Jquery, Vue.js, HTML5'
                    required=''
                  )
                  span.feedback-form__block-error

          .buttons-group.feedback-form__buttons
            button.button.button_cancel.works-form__button(type="button") Отмена
            button.button.button_primary.works-form__button(type='submit') Сохранить


    
      .works__list-wrapper
        ul.works__list
          li.works__item.works__item_adding
            .works__add-work-wrapper
              .works__add-work-button +
              .works__add-work-label Добавить работу
          li.works__item
            .works__preview-wrapper
              .works__preview
                img(src="../images/content/previews/1.jpg")
              .works__tags
                ul.works__tags-list
                  li.works__tags-item HTML
            .works__desc-wrapper
              h3.works__work-title Сайт школы образования
              p.works__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").works__work-link http://loftschool.ru
              .works__item-buttons-group
                .works__item-button
                  span.works__button-title Править
                  span.works__button-icon
                .works__item-button
                  span.works__button-title Удалить
                  span.works__button-icon
          li.works__item.works__item_disabled
            .works__preview-wrapper
              .works__preview
                img(src="../images/content/previews/1.jpg")
              .works__tags
                ul.works__tags-list
                  li.works__tags-item HTML
            .works__desc-wrapper
              h3.works__work-title Сайт школы образования
              p.works__work-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a(href="#").works__work-link http://loftschool.ru
              .works__item-buttons-group
                .works__item-button
                  span.works__button-title Править
                  span.works__button-icon
                .works__item-button
                  span.works__button-title Удалить
                  span.works__button-icon
    section.section.feedback
      .section__header
        h2.section__title.feedback__title Блок "Отзывы"
      .admin-form__wrapper
        form.admin-form.feedback-form
          .admin-form__header.feedback-form__header
            h3.admin-form__title.feedback-form__title Новый отзыв
          .admin-form__body.feedback-form__body
            .feedback-form__column
              .feedback-form__image-placeholder
                .avatar
                  img(src="required('../images/content/admin/user-photo-placeholder.png')")
              label.feedback-form__file-block.input-type-file
                .label.feedback-form__file-label.input-type-file__label Добавить фото
                input.input-type-file__input(type='file')
            .feedback-form__column
              .feedback-form__row
                label.feedback-form__block
                  .label.feedback-form__label Имя автора
                  input.input.input_without-icons.feedback-form__input(
                    type='text'
                    placeholder='Наталья Быстрова'
                    required=''
                  )
                  span.feedback-form__block-error
                label.feedback-form__block
                  .label.feedback-form__label Титул автора
                  input.input.input_without-icons.feedback-form__input(
                    type='text'
                    placeholder='Frontend разработчик'
                    required=''
                  )
                  span.feedback-form__block-error
              .feedback-form__row
                label.feedback-form__block.feedback-form__block_full-width
                  .label.feedback-form__label Отзыв
                  textarea.textarea.textarea_bordered.feedback-form__textarea(
                    type='text'
                    placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
                  )
                  span.feedback-form__block-error
          .buttons-group.feedback-form__buttons
            button.button.button_cancel.feedback-form__button(type="button") Отмена
            button.button.button_primary.feedback-form__button(type='submit') Сохранить
</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./styles/forms.pcss";
  @import "../styles/blocks/avatar.pcss";

  @import "./styles/about-me.pcss";
  @import "./styles/works.pcss";

  .plus {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    display: block;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }

  .section {
    padding: 60px;

    @include tablets {
      padding: 40px 20px;
    }
  }

  .section__header {
    margin-bottom: 60px;
  }

  .admin-form__wrapper {
    max-width: 1080px;
    margin-bottom: 30px;
  }

  .admin-form {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 30px;
  }

  .admin-form__header {
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 50px;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      background-color: #1f232d;
      opacity: 0.15;
    }
  }

  .admin-form__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  }

  .admin-form__body {
    display: flex;
    margin-bottom: 30px;

    @include phones {
      flex-direction: column;
    }
  }

  .admin-form__column {
    width: 50%;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

   .admin-form__row {
     margin-bottom: 30px;

     &:last-child {
       margin-bottom: 0;
     }
   }

  .button-add {
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    width: 41px;
    height: 41px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

  }

  .header {
    min-height: 80px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $dark-gray-bg;
    color: #fff;
  }

  .header__left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header__user-avatar {
    margin-right: 20px;
  }

  .header__user-name {
    margin-right: 30px;
  }

  .header__title {
    opacity: 0.5;
    color: #ffffff;
    font-size: 14px;

    @include phones {
      display: none;
    }
  }

  .header__logout {
    color: #fff;
    opacity: 0.7;
  }

  .nav {
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 0 60px;
  }

  .nav__list {
    display: flex;
  }

  .nav__link {
    text-decoration: none;
    display: block;
    padding: 29px 25px;

    &_active {
      color: $bright-blue;
      font-weight: 600;
      border-bottom: 3px solid $bright-blue;
    }
  }

  .feedback-form__image-placeholder {
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  .feedback-form__file-label {
    color: $bright-blue;
    font-size: 16px;
    font-weight: 600;
    opacity: 1;
    &:hover {
      cursor: pointer;
    }
  }

  .feedback-form__column {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }    
  }

  .feedback-form__row {
    display: flex;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    @include tablets {
      flex-direction: column;
    }
  }

  .feedback-form__block {
    margin-right: 30px;
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    &_full-width {
      width: 100%;
    }
  }
</style>