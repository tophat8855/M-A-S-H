class ModelMailer < ActionMailer::Base
  default from: "mash@mash.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.send_mash_game.subject
  #

  def send_mash_game(game, email)
    @greeting = "Hiya"
    @email = email
    @game = game
    mail to: @email, subject: "Your MASH Game"
  end
end
