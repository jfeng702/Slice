require 'test_helper'

class Api::AlbumsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_albums_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_albums_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get api_albums_destroy_url
    assert_response :success
  end

  test "should get index" do
    get api_albums_index_url
    assert_response :success
  end

  test "should get create" do
    get api_albums_create_url
    assert_response :success
  end

  test "should get update" do
    get api_albums_update_url
    assert_response :success
  end

end
