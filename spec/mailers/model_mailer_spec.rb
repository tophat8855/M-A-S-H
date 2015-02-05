require "rails_helper"

RSpec.describe ModelMailer, :type => :mailer do
  describe "send_mash_game" do
    let(:mail) { ModelMailer.send_mash_game }

    it "renders the headers" do
      expect(mail.subject).to eq("Send mash game")
      expect(mail.to).to eq(["to@example.org"])
      expect(mail.from).to eq(["from@example.com"])
    end

    it "renders the body" do
      expect(mail.body.encoded).to match("Hi")
    end
  end

end
