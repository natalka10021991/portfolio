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
          a.nav__link(href="#") Обо мне
        li.nav__item
          a.nav__link(href="#") Работы
        li.nav__item
          a.nav__link(href="#") Отзывы

    section.feedback
      h2.feedback__title Блок "Отзывы"
      .feedback__feedback-form
        form.feedback-form
          .feedback-form__header
            h3.feedback-form__title Новый отзыв
          .feedback-form__body
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
          .feedback-form__buttons
            button.button.button_cancel.feedback-form__button(type="button") Отмена
            button.button.button_save.feedback-form__button(type='submit') Сохранить


    
</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "../styles/blocks/forms.pcss";
  @import "../styles/blocks/avatar.pcss";
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

    @include phones {
      display: none;
    }
  }

  .header__logout {
    color: #fff;
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

  .nav__item {
    margin-right: 50px;

    &:last-child {
      margin-right: 0;
    }
  }

  .nav__link {
    text-decoration: none;
  }

  .feedback {
    padding: 60px;

    @include tablets {
      padding: 40px 20px;
    }
  }

  .feedback__title {
    margin-bottom: 60px;
  }

  .feedback-form {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    padding: 30px;

  }

  .feedback-form__header {
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

  .feedback-form__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 34px;
  }

  .feedback-form__body {
    display: flex;
    margin-bottom: 30px;

    @include phones {
      flex-direction: column;
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
    color: #383bcf;
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

  .feedback-form__buttons {
    display: flex;
    justify-content: flex-end;
  }
</style>