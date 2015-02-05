class ModelMailer < ActionMailer::Base
  default from: "from@sandboxcd978ea0f42447eb9b9921a5e921c9b7.mailgun.org"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.model_mailer.send_mash_game.subject
  #
  def send_mash_game
    @greeting = "Hi"

    mail to: "hrfarley@gmail.com"
  end

  def send_mash_game(game)
    @game = game
    mail to: "hrfarley@gmail.com", subject: "Success! You did it."

  end
end