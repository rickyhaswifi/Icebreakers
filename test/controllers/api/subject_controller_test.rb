require 'test_helper'

class Api::SubjectControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_subject_index_url
    assert_response :success
  end

end
