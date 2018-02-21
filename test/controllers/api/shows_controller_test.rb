require 'test_helper'

class Api::ShowsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_shows_index_url
    assert_response :success
  end

  test "should get show" do
    get api_shows_show_url
    assert_response :success
  end

end
